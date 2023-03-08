import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Conectado ao Banco de Dados Mongodb ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Erro no Mongodb ${error}`.bgRed.white);
    }
}

export default connectDB; 