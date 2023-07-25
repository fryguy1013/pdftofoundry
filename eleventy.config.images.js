const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

module.exports = (eleventyConfig) => {
    function relativeToInputPath(inputPath, relativeFilePath) {
        let split = inputPath.split("/");
        split.pop();

        return path.resolve(split.join(path.sep), relativeFilePath);
    }

    // Eleventy Image shortcode
    // https://www.11ty.dev/docs/plugins/image/
    eleventyConfig.addAsyncShortcode(
        "image",
        async function imageShortcode(src, alt, widths, sizes) {
            // Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
            // Warning: Avif can be resource-intensive so take care!
            let formats = ["webp", "auto"];
            let file = relativeToInputPath(this.page.inputPath, src);
            let metadata = await eleventyImage(file, {
                widths: widths || [400, "auto"],
                formats,
                outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
            });

            const thumb = metadata.webp[0];
            const full = metadata.webp[metadata.webp.length - 1];
            return `<div>
                <a href="${full.url}">
                    <img src="${thumb.url}" width="${thumb.width}" height="${thumb.height}" alt="${alt}" loading="lazy" decoding="async">
                </a>
                ${alt ? `<span class="zoom-initial-caption">${alt}</span>` : ""}
            </div>`;
        }
    );

    eleventyConfig.addAsyncShortcode(
        "galleryimage",
        async function imageShortcode(src) {
            let formats = ["webp", "auto"];
            let file = relativeToInputPath(this.page.inputPath, src);
            let metadata = await eleventyImage(file, {
                widths: [350, "auto"],
                formats,
                outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
            });

            const thumb = metadata.webp[0];
            const full = metadata.webp[metadata.webp.length - 1];
            return `<div class="gallery-image">
                <a href="${full.url}">
                    <img src="${thumb.url}" width="${thumb.width}" height="${thumb.height}" loading="lazy" decoding="async">
                </a>
            </div>`;
        }
    );
};
