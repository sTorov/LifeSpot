using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.FileProviders;

namespace LifeSpot.Extensions
{
    public static class EndpointMapper
    {
        /// <summary>
        /// Маппинг CSS-файлов
        /// </summary>
        public static void MapCss(this IEndpointRouteBuilder builder)
        {
            var cssFiles = new[] { "index.css" };

            foreach (var fileName in cssFiles)
            {
                builder.MapGet($"/Static/css/{fileName}", async context =>
                {
                    var cssPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "css", fileName);
                    var css = await File.ReadAllTextAsync(cssPath);
                    await context.Response.WriteAsync(css);
                });
            }
        }

        /// <summary>
        /// Маппинг JS-файлов
        /// </summary>
        public static void MapJs(this IEndpointRouteBuilder builder)
        {
            var jsFiles = new[] { "index.js", "testing.js", "about.js" };

            foreach (var fileName in jsFiles)
            {
                builder.MapGet($"/Static/js/{fileName}", async context =>
                {
                    var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "js", fileName);
                    var js = await File.ReadAllTextAsync(jsPath);
                    await context.Response.WriteAsync(js);
                });
            }
        }

        /// <summary>
        /// Маппинг HTML-файлов
        /// </summary>
        public static void MapHtml(this IEndpointRouteBuilder builder)
        {
            string footerHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "footer.html"));
            string sideBarHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "sideBar.html"));
            string testSliderHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "test_slider.html"));
            string caruselHtml = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "carusel.html"));

            var htmlDict = new Dictionary<string, string>
            {
                {"/", "index.html"},
                {"/testing", "testing.html"},
                {"/about", "about.html"},
            };

            foreach (var pair in htmlDict)
            {
                builder.MapGet(pair.Key, async context =>
                {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", pair.Value);
                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                    .Replace("<!--SIDEBAR-->", sideBarHtml)
                    .Replace("<!--FOOTER-->", footerHtml)
                    .Replace("<!--TEST-SLIDER-->", testSliderHtml)
                    .Replace("<!--CARUSEL-->", caruselHtml);

                    await context.Response.WriteAsync(html.ToString());
                });
            }
        }

        /// <summary>
        /// Маппинг изображений
        /// </summary>
        static public void MapJpg(this IEndpointRouteBuilder builder)
        {
            var images = new[] { "london.jpg", "ny.jpg", "spb.jpg" };

            foreach (var fileName in images)
            {
                builder.MapGet($"/Static/img/{fileName}", async context =>
                {
                    var imgPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "img", fileName);
                    var img = await File.ReadAllBytesAsync(imgPath);
                    await context.Response.Body.WriteAsync(img);
                });
            }
        }
    }
}
