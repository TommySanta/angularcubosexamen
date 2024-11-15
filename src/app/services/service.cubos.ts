import axios from "axios";
import { environment } from "../../environments/environment.development";
import { UsuarioLogin } from "../models/usuariologin";
import { Cubo } from "../models/cubo";
import { Comentario } from "../models/comentario";

export default class ServiceCubos {

    login(user: UsuarioLogin): Promise<any> {
        return new Promise(function (resolve, reject) {
            let request = "/api/Manage/Login";
            let url = environment.urlApiCubos + request;

            axios.post(url, user, { headers: { "Content-Type": "application/json" } })
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    register(user: any) {
        return new Promise(function (resolve) {
            let request = "/api/Manage/RegistroUsuario";
            let url = environment.urlApiCubos + request;
            let token = environment.token;
            axios.post(url, user, { headers: { Authorization: "bearer " + token, "Content-Type": "application/json" } }).then((response) => {
                resolve(response);
            })
        })
    }

    getMarcas(): Promise<any> {
        let request = "api/Cubos/Marcas";
        let url = environment.urlApiCubos + request;

        return new Promise(function (resolve) {
            axios.get(url).then(response => {
                console.log('Respuesta de getMarcas:', response.data);
                resolve(response.data);
            }).catch(error => {
                console.error('Error al obtener marcas:', error);
                resolve([]);
            });
        });
    }

    // Modificado para devolver un array de instancias de Cubo
    getCubos(): Promise<Cubo[]> {
        return new Promise(function (resolve) {
            let request = "api/Cubos";
            let url = environment.urlApiCubos + request;

            axios.get(url).then(response => {
                console.log("Leyendo Cubos");

                // Convertir los datos a instancias de Cubo
                const cubos = response.data.map((cuboData: any) => new Cubo(
                    cuboData.idCubo,
                    cuboData.nombre,
                    cuboData.modelo,
                    cuboData.marca,
                    cuboData.color,
                    cuboData.imagen,
                    cuboData.precio,
                    cuboData.valoracion
                ));

                resolve(cubos);
            })
        });
    }

    // Modificado para devolver un Cubo específico
    getCubo(id: string): Promise<Cubo> {
        return new Promise(function (resolve) {
            let request = "api/Cubos/" + id;
            let url = environment.urlApiCubos + request;

            axios.get(url).then(response => {
                console.log("Leyendo Cubo");

                // Convertir los datos a una instancia de Cubo
                const cubo = new Cubo(
                    response.data.idCubo,
                    response.data.nombre,
                    response.data.modelo,
                    response.data.marca,
                    response.data.color,
                    response.data.imagen,
                    response.data.precio,
                    response.data.valoracion
                );

                resolve(cubo);
            })
        });
    }

    getCubosMarca(marca: string): Promise<Cubo[]> {
        return new Promise(function (resolve) {
            let request = "api/Cubos/CubosMarca/" + marca;
            let url = environment.urlApiCubos + request;

            axios.get(url).then(response => {
                console.log("Leyendo Cubos de la marca: " + marca);

                // Convertir los datos a instancias de Cubo
                const cubos = response.data.map((cuboData: any) => new Cubo(
                    cuboData.idCubo,
                    cuboData.nombre,
                    cuboData.modelo,
                    cuboData.marca,
                    cuboData.color,
                    cuboData.imagen,
                    cuboData.precio,
                    cuboData.valoracion
                ));

                resolve(cubos);
            })
        })
    }

    // Modificado para devolver un array de instancias de Comentario
    getComentarios(id: string): Promise<Comentario[]> {
        return new Promise(function (resolve) {
            let request = "api/ComentariosCubo/GetComentariosCubo/" + id;
            let url = environment.urlApiCubos + request;

            axios.get(url).then(response => {
                console.log("Leyendo Comentarios");

                // Convertir los datos a instancias de Comentario
                const comentarios = response.data.map((comentarioData: any) => new Comentario(
                    comentarioData.idComentario,
                    comentarioData.idCubo,
                    comentarioData.idUsuario,
                    comentarioData.comentario,
                    comentarioData.fechaComentario
                ));

                resolve(comentarios);
            })
        })
    }

    getPerfilUsuario() {
        return new Promise(function (resolve) {
            let request = "/api/Manage/PerfilUsuario";
            let url = environment.urlApiCubos + request;
            let token = environment.token;
            console.log(token);
            axios.get(url, { headers: { Authorization: "bearer " + token } }).then(response => {
                console.log("Obteniendo el perfil del usuario");
                resolve(response.data);
            })
        })
    }

    getCompras(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            let request = "/api/Compra/ComprasUsuario";
            let url = environment.urlApiCubos + request;
            let token = environment.token;

            axios.get(url, { headers: { Authorization: "bearer " + token } })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    realizarPedido(idCubo: string) {
        return new Promise(function (resolve) {
            let request = "/api/Compra/InsertarPedido/" + idCubo;
            let url = environment.urlApiCubos + request;
            let token = environment.token;

            axios.post(url, idCubo, { headers: { Authorization: "bearer " + token } }).then(response => {
                console.log("Insertando un nuevo producto");
                resolve(response)
            })
        })
    }
}
