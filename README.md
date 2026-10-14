# graingraph.github.io

The source of [graingraph.com](https://graingraph.com), the website for
[graingraph](https://github.com/LackOfMorals/graingraph).

It is plain HTML and CSS with no build step and no external requests. Edit the
files and push to `main`; GitHub Pages serves the repository root.

| File | |
|---|---|
| `index.html`, `style.css`, `script.js` | the page (the script only adds Copy buttons) |
| `llms.txt` | a map of the project for LLMs and agents |
| `robots.txt`, `sitemap.xml` | for crawlers |
| `404.html` | the not-found page |
| `CNAME` | the custom domain, `graingraph.com` |
| `.nojekyll` | serve the files as they are, without Jekyll |

Preview locally with `python3 -m http.server` and open <http://localhost:8000>.

The code samples and the JSON and TOON example on the page were run against
graingraph v0.2.0. Re-check them when a release changes the API or the output.

## DNS for graingraph.com

At the domain registrar, for the apex domain `graingraph.com`, add the four
GitHub Pages `A` records `185.199.108.153`, `185.199.109.153`,
`185.199.110.153` and `185.199.111.153` (and the matching `AAAA` records if you
want IPv6). For `www`, add a `CNAME` to `lackofmorals.github.io`. GitHub's
documentation lists the current addresses. After DNS has propagated, turn on
"Enforce HTTPS" in the repository's Pages settings. If this repository moves to
a `graingraph` organisation, change the `www` target to `graingraph.github.io`.
