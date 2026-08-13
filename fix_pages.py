import re

# Fix app/about/page.tsx
with open("app/about/page.tsx", "r") as f:
    about_content = f.read()

# Replace the Map section and FacilityGallery
# We will just remove the entire "Our Facility" section from the About page
about_content = re.sub(
    r'\s*\{\/\* Our Facility \*\/\}.*?(?=\s*<\/div>\s*<\/div>\s*;\s*\}\s*$)',
    '\n    </div>\n  );\n}',
    about_content,
    flags=re.DOTALL
)

with open("app/about/page.tsx", "w") as f:
    f.write(about_content)

print("Fixed about/page.tsx")
