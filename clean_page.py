import re

with open("app/page.tsx", "r") as f:
    content = f.read()

# 1. Imports
content = content.replace(
    'import { TestimonialSlider } from "@/components/TestimonialSlider";',
    'import { BrandScroller, BrandScrollerReverse } from "@/components/ui/brand-scoller";\nimport { ContactForm } from "@/components/ContactForm";'
)

# 2. Remove "What we offer" section
content = re.sub(
    r'\s*\{\/\* What we offer \*\/\}.*?(?=\{\/\* Our Services \/ About \*\/\})',
    '\n\n',
    content,
    flags=re.DOTALL
)

# 3. Remove Educational support up to Testimonials
content = re.sub(
    r'\s*\{\/\* Educational support \*\/\}.*?(?=\{\/\* Testimonials \*\/\})',
    '\n\n',
    content,
    flags=re.DOTALL
)

# 4. Replace Testimonials
testimonials_replacement = """      {/* Testimonials */}
      <section className="py-20 overflow-hidden bg-[#FAF7F2] border-b border-slate-200/50">
        <div className="mx-auto max-w-6xl px-5 text-center mb-10">
          <Reveal>
            <span className="eyebrow">Testimonials</span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-4 text-3xl md:text-4xl">What Families Say About Us</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-3 text-sm text-muted-foreground">
              Trusted by families across California.
            </p>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="space-y-4">
            <BrandScroller />
            <BrandScrollerReverse />
          </div>
        </Reveal>
      </section>
"""
content = re.sub(
    r'\s*\{\/\* Testimonials \*\/\}.*?(?=\{\/\* Team \*\/\})',
    '\n' + testimonials_replacement + '\n',
    content,
    flags=re.DOTALL
)

# 5. Add ContactForm before the final </div>
content = re.sub(
    r'(\s*)\{\/\* FAQ \*\/\}(.*?)(?=\s*<\/div>\s*<\/div>\s*;\s*\}\s*$|\s*<\/div>\s*;\s*\}\s*$)',
    r'\1{/* FAQ */}\2\n      <div className="bg-[#FAF7F2] border-t border-slate-200/50">\n        <ContactForm />\n      </div>\n',
    content,
    flags=re.DOTALL
)

with open("app/page.tsx", "w") as f:
    f.write(content)
print("Done!")
