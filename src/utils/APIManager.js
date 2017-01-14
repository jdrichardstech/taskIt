import superagent from 'superagent'
import Promise from 'bluebird'


export default{

get:(url, params)=>{
  return new Promise((resolve,reject)=>{
    superagent
    .get(url)
    .query(params)
    .set('Accept', 'application/json')
    .end((err, response)=>{
      if(err){
        reject(err)
        return
      }
      if(response.body.confirmation !='success'){
        reject({message:response.body.message})
        return
      }
      resolve(response.body)
    })

  })
},
post:(url, params)=>{
  return new Promise((resolve,reject)=>{
    superagent
    .post(url)
    .send(params)
    .set('Accept', 'application/json')
    .end((err, response)=>{
      if(err){
        reject(err)
        return
      }

      if(response.body.confirmation !='success'){
        reject({message:response.body.message})
        return
      }
      resolve(response.body)
    })

  })
},

put: (url, body, callback) => {
		superagent
		.put(url)
		.send(body)
		.set('Accept', 'application/json')
		.end((err, response) => {
			if (err){
				callback(err, null)
				return
			}

			const confirmation = response.body.confirmation
			if (confirmation != 'success'){
				callback({message: response.body.message}, null)
				return
			}

			callback(null, response.body)
		})
	},

	delete: () => {

	},

	upload: (endpoint, file, params, callback) => {
		console.log('APIManager - upload: ')
		let uploadRequest = superagent.post(endpoint)

		uploadRequest.attach('file', file)
		Object.keys(params).forEach((key)=>{
			uploadRequest.field(key, params[key])
		})

		uploadRequest.end((err, response)=>{
			if(err){
				callback(err, null)
				return
			}
			callback(null, response)
		})
	}

// uploadFile: (url, file, params) => {
//   return new Promise((resolve reject)=>{
//     let uploadRequest = superagent.post(endpoint)
//     uploadRequest.attach('file', file)
//     if(params !=null){
//       Object.keys(params).forEach((key)=>{
//         uploadRequest.field(key, params[key])
//       })
//     }
//   })
// }



}
