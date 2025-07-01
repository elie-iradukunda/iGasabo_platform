import { Pool } from "pg";
const pool=new Pool({
    connectionString:"postgres://iGasabo_platform_owner:npg_x8U6VwpeFZdr@ep-purple-frost-a8rslbj9-pooler.eastus2.azure.neon.tech/iGasabo_platform?sslmode=require&channel_binding=require",
    ssl:{
        rejectUnauthorized:false,
    }
})

export default pool;