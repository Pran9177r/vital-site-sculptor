import os
import re
import urllib.request
from urllib.parse import urlparse

# Ensure the public/cloudinary directory exists
output_dir = "public/cloudinary"
os.makedirs(output_dir, exist_ok=True)

# Regex to find Cloudinary URLs
url_pattern = re.compile(r'(https://res\.cloudinary\.com/[^"\']+\.(?:png|jpg|jpeg|webp))')

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    urls = url_pattern.findall(content)
    if not urls:
        return False
        
    modified_content = content
    for url in set(urls):
        parsed = urlparse(url)
        filename = os.path.basename(parsed.path)
        
        local_filepath = os.path.join(output_dir, filename)
        
        if not os.path.exists(local_filepath):
            print(f"Downloading {url} to {local_filepath}")
            try:
                urllib.request.urlretrieve(url, local_filepath)
            except Exception as e:
                print(f"Failed to download {url}: {e}")
                continue
                
        public_path = f"/cloudinary/{filename}"
        modified_content = modified_content.replace(url, public_path)
        print(f"Replaced {url} with {public_path} in {filepath}")
        
    if modified_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(modified_content)
        return True
    return False

changed_files = 0
for root, _, files in os.walk("app"):
    for file in files:
        if file.endswith(".tsx"):
            filepath = os.path.join(root, file)
            if process_file(filepath):
                changed_files += 1

print(f"Done. Modified {changed_files} files.")
