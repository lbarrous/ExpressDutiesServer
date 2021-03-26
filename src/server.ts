import app from "./app";
import { PORT } from "./constants/dutyAPIConstants";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));