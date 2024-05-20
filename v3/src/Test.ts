import axios, {HttpStatusCode, isAxiosError} from "axios";

axios.defaults.baseURL = "http://ggm.gondr.net/api";

async function test() {
  const now = new Date();
  try {
    const res = await axios.post('/team/record/daily', {
      team: 27, content: "봇 코드 전체 리펙토링", record_day:"2024-05-16"
    });
    console.log(res.status);
  }
  catch(err) {
    if(isAxiosError(err)) {
      if(err.response && err.response.status === HttpStatusCode.Unauthorized) {
        console.log('Unauthorized');
      }
    }
  }
  // const commandManager = new CommandManager();
  // await commandManager.init();
  // console.log(commandManager.commands);
}
test();