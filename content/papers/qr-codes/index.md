---
title: "Synthetic Data Generation for Edge-Case Object Detection"
authors:
  - admin
date: "2024-10-07T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2024-10-07T00:00:00Z"

# Publication type.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: "Since the world has gained access to AI, we have all seen a proliferation of bad actors. The need for rapid and accurate detection of phishing attacks embedded within email and messaging platforms has become paramount. Traditional detection methods, including heuristics, analyst rules, and YARA-based mechanisms, have inherent limitations, often resulting in significant inaccuracies—particularly high false positives (FPs) or false negatives (FNs), especially around edge-case detections. To overcome these limitations, one could deploy a full end to end deep learning-based pipeline which could dramatically enhance both speed and accuracy in threat detections. Computer Vision for Threat Detection Computer vision models have been around for decades, and one particular family of models that many people are familiar with is YOLO (You Only Look Once). Under the Ultralytics license, the YOLO family has progressed through versions YOLOv3 to YOLOv11 (the most recent). To work with these models, companies are typically required to open-source their work—including model weights and datasets—or obtain a license. Given that most enterprises cannot open-source their proprietary data, licensing becomes the default path. Despite the costs, the value added by deploying the latest versions of YOLO can greatly outweigh the expenses, especially for companies reliant on costly third-party OCR solutions. One can imagine deploying YOLO models, such as YOLOv9 or YOLOv11, to leverage their advanced architectures that balance speed and accuracy. These models could be integrated into a detection pipeline to identify potential threats, such as phishing emails that contain suspicious links or scam images or even impersonations of your company. Utilizing Synthetic Data Deploying a YOLO model starts with creating a dataset, a process many engineers find mundane due to the time-consuming tasks of building and labeling data. While most enterprise data has its limitations and is typically imbalanced, we can leverage synthetic data to tailor our dataset specifically for edge-case detections, where traditional analyst rules, heuristics, and costly third-party software tend to fail. With all of the latest generative AI tools, such as Stable Diffusion, DALL-E, Segment Anything Model 2 (SAM), Variational Autoencoders (VAEs), generating a highly diverse dataset has never been easier. This diversity is required nowadays so that we can simulate the real-world edge-case conditions which would easily fool our traditional detection methods."

# Summary. An optional shortened abstract.
summary: "As AI becomes more accessible, bad actors have increasingly exploited it, driving the urgent need for rapid and accurate phishing detection in email and messaging platforms. Traditional methods like heuristics, analyst rules, and YARA often struggle with edge cases, resulting in high false positive (FP) or false negative (FN) rates. To address these shortcomings, deploying deep learning-based pipelines, particularly with YOLO (You Only Look Once) models, can greatly enhance detection accuracy and speed."

tags:
  - Synthetic Data Generation
  - Computer Vision

featured: true

links:
  - name: Custom Link
    url: http://derekdeming.io
url_pdf: http://arxiv.org/pdf/1512.04133v1
url_code: 'https://github.com/derekdeming'
url_dataset: '#'
url_poster: '#'
url_project: ''
url_slides: ''
url_source: '#'
url_video: '#'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
  focal_point: ""
  preview_only: false

projects:
  - internal-project

slides: example
---

This work is driven by the results in my [previous paper](/publication/conference-paper/) on LLMs.

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
