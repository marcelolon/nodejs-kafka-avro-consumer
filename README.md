# Node.js Kafka Avro Consumer

Projeto que cria um consumidor do kafka já integrado com o avro para visualizar os registros de um ou vários tópicos.

A url do schema registry e do broker kafka assim como os tópicos a serem consumidos podem ser customizados pelas seguintes variáveis de ambiente

KAFKA_HOST: url do broker kafka. default: localhost:9092  
SHEMA_REGISTRY: url do schema registry. default: http://localhost:9081  
TOPICS: parâmetro obrigatório no qual deve ser um array json. Exemplo: `TOPICS='["creditas.platform.risk.workflow_decision_made_v2", "A", "B"]'`

### Build
`docker build . -t nodejs-kafka-avro-consumer`

### Run network mode host
`docker run --rm  --network host -e TOPICS='["creditas.platform.risk.workflow_decision_made_v2"]'  --name nodejs-kafka-avro-consumer nodejs-kafka-avro-consumer`