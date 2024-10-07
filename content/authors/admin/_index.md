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
role: Senior ML Engineer

# Organizations/Affiliations to display in Biography blox
organizations:
  - name: Microsoft Security Research
    url: [Microsoft Security Research](https://www.microsoft.com/en-us/msrc)

# Social network links
# Need to use another icon? Simply download the SVG icon to your `assets/media/icons/` folder.
profiles:
  - icon: at-symbol
    url: 'mailto:derekdeming@microsoft.com'
    label: E-mail Me
  - icon: brands/x
    url: https://twitter.com/ddeming_
  - icon: brands/github
    url: https://github.com/derekdeming
  - icon: brands/linkedin
    url: https://www.linkedin.com/in/derek-deming/

interests:
  - MLOps / ML Infra
  - Artificial Intelligence
  - Interpretability
  - Security

education:
  - area: PhD in Computational Chemical Physics (dropped out)
    institution: University of California Irvine
    summary: |
      i was a computational researcher for over 2 years where i focused on understanding the structural dynamics of biological systems. most of this work was done in collaboration with wet biochem/biophysics researchers. there were a variety of related and unrelated reasons which went into my decision to leave my phd going into my third year. i passed all my course work during my first 2 years with a 3.8 GPA. ultimately there were opportunities outside of my phd which were more of interest to support myself, my family and furthering my career. although i dropped out of my phd, i have not and will not stop doing research or thinking like a researcher. 
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
    company_url: 'https://www.microsoft.com/en-us/research/publications/?'
    date_start: 2023-12-18
    date_end: ''
    summary: |2-
      Responsibilities include:
      - I am part of the Microsoft Defender of Office (MDO) Security Research Org at MSFT specifically working on building out the machine learning capabilities and scalable infrastructure of the product. I am also part of the Sonar Machine Learning (Sonar ML) team which is the full detonation platform we built for detonating threat vectors in real time. One project in particular that I was a part of was building an internal small language model (SLM) for Business Compromised Emails (BEC), Spam and Phish detection. For this project we trained, fine-tuned, and optimized perception DNNs in FP16/INT8 precision, enhancing model efficiency while reducing computational overhead for production deployments and leveraged NVIDIA’s TensorRT and CUDA extensively to optimize neural networks for speed and accuracy improvements, ensuring compatibility with GPU architectures used internally.
      - Within the first 3 months of being at MSFT, I built and deployed a proprietary near real-time inference computer vision model with aides in detecting and decoding malicious QR codes in messages. The model is scaled out touching over half a billion messages on a daily basis saving the company over 25 million dollars in COGs processing messages with third party software. 
      - I am the creator and primary contributor to a new ONXX Model Predictor library built in C# and .NET which serves as a CPU inference compute engine for our models. This library allows the security models we build to be  consumed by organizations across MSFT (inside and outside my org) as a Nuget package and offers near real time inference (sub 30 milliseconds) time.
      - Due to MSFT Security First Initiative (SFI), there has been a mass infrastructure lockdown to ensure our systems are “SFI compliant”. I am the lead engineer for my team and much of the work associated with SFI has been around proper authentication, storage account cloud security, network isolation of our virtual machines (VMs) and much more. 

  - position: ML Software Engineer
    company_name: Open-Source
    summary: |
      Projects include:
      - I strongly believe in contributing and working with open source software when it comes to building solutions for enterprises, especially in-house solutions. One thing I have worked on is implementing RLHF (Reinforcement Learning from Human Feedback) pipelines in Langchain and LlamaIndex and Langraph within a startup called Cartha which develops personalized therapy solutions with AI. As part of this work, I developed custom retrievers and query transformers to route data to the proper places so make sure the query was being served appropriately. 
      - Applied advanced optimization techniques such as model pruning, quantization, and kernel fusion to deep learning models, enhancing their suitability for low-latency applications on edge devices. Implemented RAG systems with NVIDIA acceleration frameworks, utilizing hybrid retrieval methods for better performance, leading to more efficient memory utilization during inference.
      - Another project I have worked on is optimizing RAG systems using hybrid vector + sparse retrieval and reciprocal rank fusion via advanced retrieval systems. This work included implementing concepts like Hypothetical Document Embeddings (HyDE) for zero-shot dense retrieval, ColBERT for late-interaction dense retrieval and Chain-of-Thought (CoT) for enhanced reasoning of multi-step queries. I also lead in the developing custom tokenizers and embedding models for specialized security datasets
      - Other projects have included finetuning and deploying the latest edge open-source language models (Phi 2, Phi 3, and Phi 3.5, Llama 1/2/3(3.2),  and Mistral 8x7B. One library in particular that I find very useful for finetuning language models is Unlsoth as it allows you to unlock the GPUs that are otherwise locked up during the finetuning process. I have applied a variety of AI training and post-training processing techniques such as PEFT methods (LoRA, QLoRA) on Phi-3, Llama 3, and Mistral-7B for efficient adaptation. So that we could use the models on edge devices via Ollama, I leveraged GPTQ and GGUF quantization for optimized inference. 

  - position: Data Platform ML Software Engineer
    company_name: Securian Financial
    summary: |
      Responsibilties included:
      - ML-Focused Infrastructure Design & MLOps: Designed and managed scalable AI infrastructure using Terraform and CloudFormation for IaC, leveraging MLOps principles with CI/CD pipelines via GitHub Actions to deploy ML solutions into production.
      - Data & ML Architecture: Built high-throughput data pipelines using AWS Glue, Apache Spark, and S3, developed automated ETL workflows with AWS Step Functions, and collaborated with data scientists to deploy credit risk models on Amazon SageMaker with optimized costs.
      - Cloud & Real-time Data Streaming: Deployed scalable ML workloads with AWS Lambda and EKS, automated pipelines using Apache Airflow, managed model versioning with MLflow, and built real-time data ingestion and streaming systems using Apache Kafka and Amazon Kinesis for fraud detection.
      - Containerization & Microservices: Developed Docker-based containerized ML services, deployed them using Amazon EKS, managed deployments with Helm charts, configured horizontal pod autoscaling, and used Prometheus and Grafana for real-time system health monitoring.


# Skills
# Add your own SVG icons to `assets/media/icons/`
skills:
  - name: Technical Skills
    items:
      - name: Python
        icon: code-bracket
      - name: C# & C++
        icon: code-bracket
      - name: Javascript & Typescript
        icon: code-bracket
      - name: GO 
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
        icon: 
        
  - name: Hobbies
    color: '#eeac02'
    color_border: '#f0bf23'
    items:
      - name: Working out
        icon: person-simple-walk
      - name: Dogs
        icon: dog
      - name: Gaming
        description: ''
        percent: 80
        icon: camera

languages:
  - name: English
    percent: 100


# Awards.
#   Add/remove as many awards below as you like.
#   Only `title`, `awarder`, and `date` are required.
#   Begin multi-line `summary` with YAML's `|` or `|2-` multi-line prefix and indent 2 spaces below.
awards:
  - title: PNNL-WSU Distinguished Graduate Research Program Fellow
    date: '2019-08-10'
    awarder: Pacific Northwest National Lab
    summary: |
      I was awarded this fellowship for my research on customizing metal-organic frameworks (MOFs) for nuclear waste separation. this was funding for 4 years of my PhD and the opportunity to finish out the rest of my PhD research at PNNL research trying to figure out how to optimize the structural ligand components of MOFs for the best binding affinity to nuclear waste.
  - title: Radioactive Material and Engineering Fellowship @ Department of Energy
    date: '2018-07-01'
    awarder: Department of Energy
    summary: |
      Awarded this prestigious fellowship to advance research in f-block elements (lanthanides and actinides), with a focus on their properties, synthesis, and applications. Conducted detailed investigations into the behavior of these elements under various conditions to better understand their role in nuclear fuel cycles, waste remediation, and material science. My research included developing experimental and computational methodologies to study the unique chemistry of these elements, contributing to the safe handling, storage, and disposal of radioactive materials. Collaborated closely with experts from the Department of Energy to apply findings in real-world applications, such as optimizing metal-organic frameworks (MOFs) for radioactive waste separations and enhancing the efficiency of nuclear reactors.

---

## About Me


Here's the first-person version, polished for readability:

I am an experienced researcher and engineer specializing in machine learning, computational science, and security applications. With a background in computational chemistry and biophysics, I blend a deep understanding of scientific principles with cutting-edge technology to tackle complex challenges. I have worked extensively in AI, cloud infrastructure, and secure machine learning, driving impactful projects across sectors such as the financial industry, cybersecurity, and bioinformatics.

I am particularly passionate about applying machine learning to real-world problems, from developing scalable AI infrastructure to optimizing neural networks for deployment in resource-constrained environments. I have also contributed to open-source projects, focusing on the integration of reinforcement learning and retrieval-augmented generation (RAG) in small and large language model applications. I enjoy building secure and efficient solutions for threat detection in cybersecurity, with notable experience deploying large-scale inference models for enterprise security.

Throughout my career, I have been driven by a commitment to bridging the gap between research and practical implementation, making advanced AI and data science capabilities accessible to industry professionals.


