import { FsuipcApi } from "../src/api";

const fsuipc = new FsuipcApi();

async function test() {
  await fsuipc.init();
  fsuipc.listen(1000, ['atcTypeCode']).subscribe((data) => {
    console.log(data);
  })
}

test();