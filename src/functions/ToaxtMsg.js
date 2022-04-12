import { showMessage } from "react-native-flash-message";
import Colors from "@constants/Colors";

export default class ToaxtMsg {
    constructor() {
    }

    async Success(message) {

        return showMessage({
            message: message,
            type: "default",
            floating: true,
            position: 'top',
            icon: 'success',
            backgroundColor: "green",
            color: '#fff',
        });
    }

    async Error(message) {

        return showMessage({
            message: message,
            type: "default",
            floating: true,
            position: 'top',
            icon: 'danger',
            backgroundColor: "red",
            color: '#fff',
        });
    }

    async Info(message) {

        return showMessage({
            message: message,
            type: "default",
            floating: true,
            position: 'top',
            icon: 'info',
            backgroundColor: Colors.PRIMARY_COLOR,
            color: '#fff',
        });
    }

    async Warning(message) {

        return showMessage({
            message: message,
            type: "default",
            floating: true,
            position: 'top',
            icon: 'warning',
            backgroundColor: Colors.ORANGE,
            color: '#fff',
        });
    }
}

