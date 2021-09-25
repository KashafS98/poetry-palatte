import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://texttospeech.googleapis.com',
  });

export const synthText = (paratha, tt, gender='FEMALE') => {
    if(!paratha){
      alert('Please enter some text')
    }
    const data = {
        "input": {
          [tt] : `${paratha}`,
        },
        "voice": {
          "languageCode": "en-US",
          "name": "sheila",
          "ssmlGender": gender
        },
        "audioConfig": {
          "audioEncoding": "MP3"
        }
      }
      console.log(data)
    return instance.post(`v1beta1/text:synthesize?key=AIzaSyBFmfm96rNGmSa1vIcqiFdZ57YVRabjnas`, data)
}
