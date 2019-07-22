import axios from 'axios';

interface ModuleParams {
  context: HTMLElement,
  params: Params
}

interface Params {
  [key: string] : string
}

interface ServerResponse {
  data: ServerData
}

interface ServerData {
  "id": string,
  "author": string,
  "width": number,
  "height": number,
  "url": string,
  "download_url": string
}

export default class Bar {

  private $context: any;
  private imageUrl: string = 'https://picsum.photos/v2/list?limit=2';

  constructor({context}: ModuleParams) {

    this.$context = context;

    this.init();
  }

  init() {
    this.$context.innerHTML = 'I am lazy loaded';

    axios.request<ServerData>({
      url: this.imageUrl,
      transformResponse: (r: ServerResponse) => r
    }).then((response) => {
      const { data } = response;
      console.log(data);
    });
  }
}
