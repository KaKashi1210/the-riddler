import app from "./app";
import { port } from "./utils/config";

app.listen(port, () => {
  console.log(`The app is running on http://localhost:${port}`)
})

