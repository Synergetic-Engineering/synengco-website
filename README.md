# Synengco Website

See https://synergetic-engineering.github.io/synengco-website/

GitHub Pages website adapted from Forty - Jekyll Theme (https://github.com/andrewbanchich/Forty-Jekyll-Theme)

## Test locally

Run

```bash
bundle exec jekyll serve
```

and view at http://localhost:4000


## Get a list of pages

```python
for root in [root for root, dirs, files in os.walk('.') if 'index.html' in files]: print 'synengco.com'+root[1:].replace('\\','/')
```