const { v4: uuidv4 } = require('uuid');
const KafkaAvro = require('kafka-node-avro');
const Settings  = {  
  "kafka" : {
    "kafkaHost" : process.env.KAFKA_HOST || "localhost:9092",
	"groupId": uuidv4()
  },
  "schema": {
    "registry" : process.env.SHEMA_REGISTRY || "http://localhost:9081"
  }
};

let topicsEnv = process.env.TOPICS;
  
if(topicsEnv === undefined){
	throw new Error('Define environment variable TOPICS in json array format: ["A","B"]')	
}
 
KafkaAvro.init(Settings).then( kafka => {

	let topics = JSON.parse(process.env.TOPICS)

	topics.forEach(function(topic) {
		console.log('Add consumer to topic: ', topic);

		let consumer = kafka.addConsumer(topic);
 
		consumer.on('message', message => {
			console.log(`========================= Start message: ${topic} =========================`)
			console.log(message)
			console.log(JSON.stringify(message.value.payload, null, 2))
			console.log(`========================= End message: ${topic} =========================`)
		});
	})

  

} , error => {
  // something wrong happen
});
