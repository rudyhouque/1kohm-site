"""Vérifications avant publication : tirets longs, liens internes et images manquants."""
import glob, os, re, sys
err = 0
for f in glob.glob('**/*.html', recursive=True):
    if f.startswith('_atelier'):
        continue
    t = open(f, encoding='utf-8').read()
    for ch, nom in (('—', 'tiret cadratin'), ('–', 'tiret demi-cadratin')):
        if ch in t:
            print(f'{f} : {nom} trouvé'); err += 1
    for ref in re.findall(r'(?:src|href)="(/[^"#?]*)"', t):
        p = ref.lstrip('/')
        if ref.endswith('/'):
            p += 'index.html'
        if not os.path.exists(p or 'index.html'):
            print(f'{f} : lien ou image introuvable {ref}'); err += 1
print('Tout est bon.' if not err else f'{err} problème(s).')
sys.exit(1 if err else 0)
