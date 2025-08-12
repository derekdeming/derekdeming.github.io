---
title: 'Graph-Grounded Agents for Large-Scale Threat Hunting'

# Authors
authors:
  - admin

date: '2025-01-15T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2025-01-15T00:00:00Z'

# Publication type.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *Microsoft Security Research Series*
publication_short: In *MSRS*

abstract: We present a novel graph-native multi-modal agent platform for large-scale threat hunting that processes over 1 billion nodes and edges from enterprise security telemetry. Our approach fuses structured telemetry (KQL), vision embeddings, and large language model signals through dynamic retrieval pipelines and advanced prompt-engineering patterns. The system demonstrates a 68% reduction in triage time for threat hunters while maintaining high accuracy in threat detection across Microsoft's enterprise security infrastructure. We introduce novel techniques for multi-modal data fusion in graph-structured security data and show how graph neural networks can be effectively combined with transformer architectures for real-time threat analysis.

# Summary. An optional shortened abstract.
summary: A graph-native multi-modal agent platform that processes >1B security nodes/edges, achieving 68% reduction in threat hunter triage time through advanced AI techniques.

tags:
  - Graph Neural Networks
  - Multi-Modal AI
  - Cybersecurity
  - Large Language Models
  - Threat Hunting

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: 'https://github.com/derekdeming'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

## Abstract

In modern enterprise environments, security analysts face the overwhelming challenge of processing massive volumes of heterogeneous security data to identify and respond to sophisticated threats. Traditional approaches rely heavily on rule-based systems and manual analysis, leading to significant delays in threat detection and response.

## Introduction

This work addresses the critical challenge of large-scale threat hunting in enterprise environments where security teams must process billions of security events daily. We propose a graph-native multi-modal agent platform that combines the structural understanding of graph neural networks with the reasoning capabilities of large language models.

## Methodology

### Graph-Native Architecture
Our system treats security telemetry as a dynamic, multi-relational graph where entities (users, devices, processes, network connections) are connected through various security-relevant relationships. This graph structure enables:

- **Temporal Analysis**: Tracking entity relationships over time
- **Multi-hop Reasoning**: Following attack paths across multiple entities
- **Anomaly Detection**: Identifying unusual patterns in entity relationships

### Multi-Modal Data Fusion
We integrate three key data modalities:

1. **Structured Telemetry**: KQL-based queries from Microsoft Sentinel and Defender
2. **Vision Embeddings**: Computer vision analysis of security artifacts (screenshots, documents, images)
3. **Language Model Signals**: Natural language processing of logs, emails, and documentation

### Dynamic Retrieval Pipelines
Our retrieval system employs:
- **Context-Aware Querying**: Adaptive query generation based on investigation context
- **Multi-Modal Ranking**: Fusion of relevance scores across different data types
- **Temporal Prioritization**: Time-sensitive information retrieval for incident response

## Results

### Performance Metrics
- **68% Reduction**: Average triage time for threat hunters
- **Scale**: Successfully processes >1 billion nodes and edges
- **Accuracy**: Maintained precision while significantly improving recall
- **Latency**: Sub-second response times for complex multi-hop queries

### Case Studies
We demonstrate the effectiveness of our approach across several real-world threat hunting scenarios:

1. **Advanced Persistent Threat (APT) Detection**: Multi-stage attack identification across enterprise infrastructure
2. **Insider Threat Analysis**: Behavioral anomaly detection through graph analysis
3. **Supply Chain Compromise**: Tracking malicious software distribution through organizational networks

## Technical Implementation

### Graph Neural Network Architecture
- **Graph Transformer**: Custom architecture for security graph processing
- **Temporal Embeddings**: Time-aware node and edge representations
- **Multi-Scale Analysis**: Graph convolutions at multiple temporal and topological scales

### Large Language Model Integration
- **Prompt Engineering**: Domain-specific prompt optimization for security contexts
- **Fine-tuning**: Specialized training on security-specific corpora
- **Multi-Modal Fusion**: Attention mechanisms for combining graph and text representations

## Contributions

1. **Novel Architecture**: First graph-native multi-modal agent platform for enterprise security
2. **Scale Demonstration**: Proven effectiveness at billion-node scale
3. **Real-World Impact**: Significant improvement in operational threat hunting efficiency
4. **Open Techniques**: Transferable methods for other large-scale graph analysis domains

## Future Work

Ongoing research directions include:
- **Federated Learning**: Privacy-preserving model training across organizations
- **Explainable AI**: Enhanced interpretability for security analyst trust
- **Real-Time Adaptation**: Continuous learning from emerging threat patterns

## Conclusion

This work demonstrates that graph-native multi-modal approaches can significantly enhance the efficiency and effectiveness of enterprise threat hunting. By combining the structural insights of graph neural networks with the reasoning capabilities of large language models, we achieve substantial improvements in both speed and accuracy of threat detection workflows.
