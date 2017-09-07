# Synengco Website

See https://synergetic-engineering.github.io/synengco-website/

GitHub Pages website adapted from Forty - Jekyll Theme (https://github.com/andrewbanchich/Forty-Jekyll-Theme)

## Test locally

Run

```bash
bundle exec jekyll serve
```

and view at http://localhost:4000


## Get a list of pages and submit the form to activate

```python
import os
import requests

built_site_dir = './_site'
page_urls = []
for root, dirs, files in os.walk(built_site_dir):
    if 'index.html' in files:
        page_urls.append('synengco.com'+root.replace(built_site_dir,'').replace('\\','/'))

for url in page_urls:
    r = requests.post(
        'https://formspree.io/info@synengco.com',
        data = {'name': 'samtesting', 'message': 'test'},
        headers = {
            'Referer': url,
            'X_REQUESTED_WITH': 'xmlhttprequest'
            }
        )
    assert r.status_code == 200, url
```
