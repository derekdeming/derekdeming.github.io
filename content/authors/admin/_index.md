---
# Display name
title: Derek Deming

# Full name (for SEO)
first_name: Derek
last_name: Deming

# Status emoji
status:
  icon: ☕️

# Is this the primary user of the site?
superuser: true

# Highlight the author in author lists? (true/false)
highlight_name: true

# Role/position/tagline
role: Applied Scientist & Senior ML Engineer

# Organizations/Affiliations to display in Biography blox
organizations:
  - name: Microsoft Security Research
    url: "https://www.microsoft.com/en-us/msrc"

# Social network links
# Need to use another icon? Simply download the SVG icon to your `assets/media/icons/` folder.
profiles:
  - icon: at-symbol
    url: 'mailto:derekdeming17@gmail.com'
    label: E-mail Me
  - icon: brands/x
    url: "https://twitter.com/ddeming_"
  - icon: brands/github
    url: "https://github.com/derekdeming"
  - icon: brands/linkedin
    url: "https://www.linkedin.com/in/derek-deming/"

interests:
  - Graph Based ML
  - Context Compression for Inference Efficiency
  - Mechanistic Interpretability
  - MLOps / ML Infra
  - Computer Vision
education:
  - area: PhD in Computational Chemical Physics (dropped out)
    institution: University of California Irvine
    summary: |
      I was a computational researcher for over 2 years where I focused on understanding the structural dynamics of biological systems. Most of this work was done in collaboration with wet biochem/biophysics researchers. There were a variety of related and unrelated reasons that influenced my decision to leave my PhD going into my third year. I passed all my coursework during my first 2 years with a 3.8 GPA. Ultimately, opportunities outside of my PhD seemed more promising to support myself, my family, and furthering my career. Although I left my PhD, I have not and will not stop doing research or thinking like a researcher.
  - area: Master in Comp. Chemistry 
    institution: Washington State University
    date_start: 2018-08-01
    date_end: 2020-05-04
    summary: |
      Fellowships and Honors:
        - PNNL-WSU Distinguished Graduate Research Program Fellow
        - Radioactive Material and Engineering Fellowship @ Department of Energy (DoE)
      GPA: 3.8/4.0
  - area: BSc in Biology and Chemistry
    institution: Concordia University Irvine
    date_start: 2014-08-20
    date_end: 2018-05-05
    summary: |
      GPA: 3.9/4.0
      Fellowships and Honors:
        - Bioinformatics Research Fellow at the Orthopedic Surgery Specialty Clinic
        - Distinguished Presidential Scholar Undergraduate Research Fellow

work:
  - position: Senior ML Software Engineer
    company_name: Microsoft (Security Research Org)
    company_url: "https://www.microsoft.com/en-us/research/publications/?"
    date_start: 2023-12-18
    date_end: ''
    summary: |2-
      Responsibilities include:
        - I am part of the Microsoft Defender of Office (MDO) Security Research Org at MSFT, specifically working on building out the machine learning capabilities and scalable infrastructure of the product. I am also part of the Sonar Machine Learning (Sonar ML) team, which is the full detonation platform we built for detonating threat vectors in real time.
        - Built an internal small language model (SLM) for Business Compromised Emails (BEC), Spam, and Phish detection, optimizing perception DNNs in FP16/INT8 precision for reduced computational overhead and enhanced production efficiency using NVIDIA's TensorRT and CUDA.
        - Developed and deployed a near real-time computer vision model for detecting and decoding malicious QR codes in messages, saving over 25 million dollars annually in COGs.
        - Created an ONNX Model Predictor library in C# and .NET for CPU inference, allowing sub-30 millisecond real-time inference across multiple Microsoft organizations as a NuGet package.
        - Lead engineer for ensuring infrastructure compliance with MSFT Security First Initiative (SFI), including authentication, cloud storage security, and network isolation for VMs.

  - position: ML Software Engineer
    company_name: Open-Source
    summary: |2-
      Projects include:
        - Implemented RLHF (Reinforcement Learning from Human Feedback) pipelines in Langchain, LlamaIndex, and Langraph for personalized therapy solutions at Cartha, including custom retrievers and query transformers.
        - Applied model optimization techniques (pruning, quantization, kernel fusion) for low-latency edge applications and implemented RAG systems with NVIDIA acceleration for enhanced inference performance.
        - Optimized RAG systems using hybrid vector+sparse retrieval, implementing ColBERT, HyDE, and CoT for enhanced reasoning of multi-step queries and developed custom tokenizers and embedding models for specialized security datasets.
        - Fine-tuned and deployed open-source language models (Phi, Llama, Mistral), leveraging the Unlsoth library for LoRA and quantization methods for edge deployment.

  - position: Data Platform ML Software Engineer
    company_name: Securian Financial
    summary: |2-
      Responsibilities included:
        - Designed scalable AI infrastructure using Terraform and CloudFormation, leveraging MLOps principles with CI/CD via GitHub Actions.
        - Built high-throughput data pipelines using AWS Glue, Apache Spark, and S3, and automated ETL workflows with AWS Step Functions.
        - Deployed scalable ML workloads using AWS Lambda and EKS, and built real-time data ingestion systems with Apache Kafka and Amazon Kinesis.
        - Developed containerized ML services with Docker, managed deployments using Helm charts, and configured Prometheus and Grafana for system health monitoring.

# Skills
skills:
  - name: Technical Skills
    items:
      - name: Python
        icon: code-bracket
      - name: C# & C++
        icon: code-bracket
      - name: JavaScript & TypeScript
        icon: code-bracket
      - name: Go
        icon: code-bracket
      - name: SQL & KQL
        icon: circle-stack
      - name: ML Infra / MLOps
        icon: circle-stack
      - name: DevOps
        icon: code-bracket
      - name: Distributed Systems
        icon: circle-stack
      - name: ML techniques
        icon: code-bracket

  - name: Hobbies
    color: '#eeac02'
    color_border: '#f0bf23'
    items:
      - name: Working out
        icon: person-simple-walk
      - name: Dogs
        icon: dog
      - name: Gaming
        icon: camera

languages:
  - name: English
    percent: 100

# Awards.
awards:
  - title: PNNL-WSU Distinguished Graduate Research Program Fellow
    date: '2019-08-10'
    awarder: Pacific Northwest National Lab
    summary: |
      Awarded for research on customizing metal-organic frameworks (MOFs) for nuclear waste separation, with funding for four years of PhD research at PNNL to optimize structural ligand components of MOFs for enhanced binding affinity to nuclear waste.
  - title: Radioactive Material and Engineering Fellowship @ Department of Energy
    date: '2018-07-01'
    awarder: Department of Energy
    summary: |
      Awarded to advance research in f-block elements (lanthanides and actinides) to understand their properties, synthesis, and real-world applications such as nuclear fuel cycles, waste remediation, and material science. Worked on optimizing metal-organic frameworks (MOFs) for radioactive waste separation and enhancing reactor efficiency.

---

## About Me

I am an experienced researcher and engineer specializing in machine learning, computational science, and security applications. With a background in computational chemistry and biophysics, I blend a deep understanding of scientific principles with cutting-edge technology to tackle complex challenges. I have worked extensively in AI, cloud infrastructure, and secure machine learning, driving impactful projects across sectors such as the financial industry, cybersecurity, and bioinformatics.

I am particularly passionate about applying machine learning to real-world problems, from developing scalable AI infrastructure to optimizing neural networks for deployment in resource-constrained environments. I have also contributed to open-source projects, focusing on the integration of reinforcement learning and retrieval-augmented generation (RAG) in small and large language model applications. I enjoy building secure and efficient solutions for threat detection in cybersecurity, with notable experience deploying large-scale inference models for enterprise security.

Throughout my career, I have been driven by a commitment to bridging the gap between research and practical implementation, making advanced AI and data science capabilities accessible to industry professionals.
