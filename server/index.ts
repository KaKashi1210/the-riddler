import app from "./app";
import { PORT } from "./utils/config";

app.listen(PORT , () => {
  console.log(`The app is running on http://localhost:${PORT}`)
}) 

