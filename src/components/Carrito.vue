<template>
  <div>
    <h1>Servicios Adquiridos</h1>
    <!--Alerta 3 -->
    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      {{ mensaje.texto }}
    </b-alert>

    <!--tabla-->
    <v-container>
      <v-simple-table fixed-header height="300px">
        <template v-slot:default>
          <thead>
            <tr>
              <th
                scope="col"
                class="teal--text font-weight-regular text-center"
              >
                Código del servicio
              </th>
              <th
                scope="col"
                class="teal--text font-weight-regular text-center"
              >
                Cliente
              </th>
              <th
                scope="col"
                class="teal--text font-weight-regular text-center"
              >
                Servicio
              </th>
              <th
                scope="col"
                class="teal--text font-weight-regular text-center"
              >
                Proveedor
              </th>
              <th
                scope="col"
                class="teal--text font-weight-regular text-center"
              >
                Fecha Solicitud
              </th>
              <th
                scope="col"
                class="teal--text font-weight-regular text-center"
              >
                Estado
              </th>
              <th
                scope="col"
                class="teal--text font-weight-regular text-center"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in compras" :key="index">
              <th scope="row" class="black--text font-weight-regular text-left">
                {{ item._id }}
              </th>
              <td>{{ item.cliente }}</td>
              <td>{{ item.servicio }}</td>
              <td>{{ item.proveedor }}</td>
              <td>{{ item.fechaSolicitud }}</td>
              <td>{{ item.estado }}</td>
              <td>
                <v-btn
                  color="gray"
                  @click="activarEdicion(item._id)"
                  v-if="!editar & !experiencia & !vista"
                  icon
                  ><v-icon>mdi-pencil</v-icon></v-btn
                >
                <v-btn
                  color="red"
                  @click="eliminarCompra(item._id)"
                  icon
                  v-if="!editar & !experiencia & !vista"
                  ><v-icon>mdi-bucket</v-icon></v-btn
                >
                <v-btn
                  color="black"
                  @click="activarVista(item._id)"
                  icon
                  v-if="!editar & !experiencia & !vista"
                  ><v-icon>mdi-eye</v-icon></v-btn
                >
                <v-btn
                  color="orange"
                  icon
                  v-if="!editar & !experiencia & !vista"
                  @click="activarEdicionStar(item._id)"
                  ><v-icon>mdi-star</v-icon></v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
    <!--Especificacion de la compra-->

    <b-container>
      <b-card bg-variant="light" v-if="!editar & !experiencia & !vista">
        <br />
        <b-form-group
          label-cols-lg="3"
          label="Soy:"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <v-radio-group v-model="row" row>
            <v-radio label="Cliente" value="radio-1"></v-radio>
            <v-radio label="Proveedor" value="radio-2"></v-radio>
          </v-radio-group>
        </b-form-group>

        <form @submit.prevent="agregarServicio()">
          <!--Info Cliente-->
          <b-card bg-variant="light">
            <br />

            <input
              type="text"
              class="form-control my-2"
              placeholder="Cliente"
              v-model="compra.cliente"
            />

            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-username"
                placeholder="E-mail"
                v-model="compra.clienteemail"
              ></b-form-input>
            </b-input-group>

            <br />

            <b-form @submit.stop.prevent>
              <b-form-input
                type="password"
                id="text-password"
                placeholder="Ingrese su Contraseña"
                aria-describedby="password-help-block"
                v-model="compra.contraseñaC"
              ></b-form-input>
              <b-form-text id="password-help-block">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </b-form-text>
            </b-form>

            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
              >Remember me</b-form-checkbox
            >

            <b-row>
              <div class="w-100"></div>
              <b-col><b-button class="btn-success">Ingresar</b-button></b-col>
              <b-col
                ><b-button class="btn-warning">Registrarme</b-button></b-col
              >
              <b-col><b-button class="btn-danger">Salir</b-button></b-col>
            </b-row>
          </b-card>

          <br />
          <!--Info Proveedor-->
          <b-card bg-variant="light">
            <br />

            <input
              type="text"
              class="form-control my-2"
              placeholder="Proveedor"
              v-model="compra.proveedor"
            />

            <b-form-input
              list="input-list"
              id="input-with-list"
              placeholder="Servicio"
              v-model="compra.servicio"
            ></b-form-input>
            <b-form-datalist
              id="input-list"
              :options="options"
            ></b-form-datalist>
            <br />

            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-username"
                placeholder="E-mail"
                v-model="compra.proveedoremail"
              ></b-form-input>
            </b-input-group>

            <br />

            <b-form @submit.stop.prevent>
              <b-form-input
                type="password"
                id="text-password"
                placeholder="Ingrese su Contraseña"
                aria-describedby="password-help-block"
                v-model="compra.contraseñaP"
              ></b-form-input>
              <b-form-text id="password-help-block">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </b-form-text>
            </b-form>

            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
              >Remember me</b-form-checkbox
            >

            <b-row>
              <div class="w-100"></div>
              <b-col><b-button class="btn-success">Ingresar</b-button></b-col>
              <b-col
                ><b-button class="btn-warning">Registrarme</b-button></b-col
              >
              <b-col><b-button class="btn-danger">Salir</b-button></b-col>
            </b-row>
          </b-card>
          <br />

          <!--Info Servicio-->

          <b-card bg-variant="light">
            <b-form-group
              label-cols-lg="3"
              label="Información del servicio"
              label-size="lg"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-row>
                <b-col>
                  <v-select
                    v-model="compra.estado"
                    :items="estado"
                    menu-props="auto"
                    label="Estado"
                    hide-details
                    single-line
                  ></v-select>
                </b-col>
                <b-col>
                  <b-form-datepicker
                    id="example-datepicker"
                    v-model="compra.fechaServicio"
                    class="mb-2"
                  ></b-form-datepicker>
                </b-col>

                <div class="w-100"></div>

                <b-col>Fecha de respuesta</b-col>
                <b-col> Fecha de aceptacion </b-col>
                <div class="w-100"></div>

                <b-col
                  >Precio Pactado:

                  <b-input-group class="mt-3" prepend="$" append=".00">
                    <b-form-input
                      type="number"
                      placeholder="Precio en miles (COP)"
                      v-model="compra.precioPactado"
                    ></b-form-input>
                  </b-input-group>
                </b-col>
                <b-col>
                  Dirección del Servicio:
                  <b-input-group class="mt-3">
                    <template #append>
                      <b-input-group-text
                        ><strong
                          ><v-icon medium color="cyan darken-2">
                            mdi-domain
                          </v-icon></strong
                        ></b-input-group-text
                      >
                    </template>
                    <b-form-input
                      placeholder="Dirección del Servicio"
                      v-model="compra.direccionServicio"
                    ></b-form-input>
                  </b-input-group>
                </b-col>

                <div class="w-100"></div>

                <b-col>
                  <v-container fluid>
                    <v-textarea
                      label="Observaciones Cliente"
                      no-resize
                      rows="2"
                      :value="value"
                      placeholder="Cuentale al proveedor sobre el servicio"
                      v-model="compra.observacionesC"
                    ></v-textarea>
                  </v-container>
                </b-col>
                <b-col>
                  <v-container fluid>
                    <v-textarea
                      label="Observaciones Proveedor"
                      no-resize
                      rows="2"
                      :value="value"
                      placeholder="Cuentale a tu cliente tus condiciones"
                      v-model="compra.observacionesP"
                    ></v-textarea>
                  </v-container>
                </b-col>
              </b-row>
            </b-form-group>
          </b-card>

          <!--Info Agregar-->
          <b-button class="btn-success my-2" type="submit"
            >Adquirir Servicio</b-button
          >
        </form>
        <br />
      </b-card>
    </b-container>

    <!--Edicion de la compra -->

    <b-container>
      <b-card bg-variant="light" v-if="editar">
        <br />
        <b-form-group
          label-cols-lg="3"
          label="Soy:"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <v-radio-group v-model="row" row>
            <v-radio label="Cliente" value="radio-1"></v-radio>
            <v-radio label="Proveedor" value="radio-2"></v-radio>
          </v-radio-group>
        </b-form-group>

        <form @submit.prevent="editarServicio(compraEditar)">
          <!--Info Cliente-->
          <b-card bg-variant="light">
            <br />

            <input
              type="text"
              class="form-control my-2"
              placeholder="Cliente"
              v-model="compraEditar.cliente"
            />

            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-username"
                placeholder="E-mail"
                v-model="compraEditar.clienteemail"
              ></b-form-input>
            </b-input-group>

            <br />
          </b-card>

          <br />
          <!--Info Proveedor-->
          <b-card bg-variant="light">
            <br />

            <input
              type="text"
              class="form-control my-2"
              placeholder="Proveedor"
              v-model="compraEditar.proveedor"
            />

            <b-form-input
              list="input-list"
              id="input-with-list"
              placeholder="Servicio"
              v-model="compraEditar.servicio"
            ></b-form-input>
            <b-form-datalist
              id="input-list"
              :options="options"
            ></b-form-datalist>
            <br />

            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-username"
                placeholder="E-mail"
                v-model="compraEditar.proveedoremail"
              ></b-form-input>
            </b-input-group>

            <br />
          </b-card>
          <br />

          <!--Info Servicio-->

          <b-card bg-variant="light">
            <b-form-group
              label-cols-lg="3"
              label="Información del servicio"
              label-size="lg"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-row>
                <b-col>
                  <v-select
                    v-model="compraEditar.estado"
                    :items="estado"
                    menu-props="auto"
                    label="En Proceso"
                    hide-details
                    single-line
                  ></v-select>
                </b-col>
                <b-col>
                  <b-form-datepicker
                    id="example-datepicker"
                    v-model="compraEditar.fechaServicio"
                    class="mb-2"
                  ></b-form-datepicker>
                </b-col>

                <div class="w-100"></div>

                <b-col
                  >Fecha de respuesta:
                  {{ compraEditar.fechaModificacion }}</b-col
                >
                <b-col>
                  Fecha de aceptacion: {{ compraEditar.fechaAceptacion }}
                </b-col>
                <div class="w-100"></div>

                <b-col
                  >Precio Pactado:

                  <b-input-group class="mt-3" prepend="$" append=".00">
                    <b-form-input
                      type="number"
                      placeholder="Precio en miles (COP)"
                      v-model="compraEditar.precioPactado"
                    ></b-form-input>
                  </b-input-group>
                </b-col>
                <b-col>
                  Dirección del Servicio:
                  <b-input-group class="mt-3">
                    <template #append>
                      <b-input-group-text
                        ><strong
                          ><v-icon medium color="cyan darken-2">
                            mdi-domain
                          </v-icon></strong
                        ></b-input-group-text
                      >
                    </template>
                    <b-form-input
                      placeholder="Dirección del Servicio"
                      v-model="compraEditar.direccionServicio"
                    ></b-form-input>
                  </b-input-group>
                </b-col>

                <div class="w-100"></div>

                <b-col>
                  <v-container fluid>
                    <v-textarea
                      label="Observaciones Cliente"
                      no-resize
                      rows="2"
                      :value="value"
                      placeholder="Cuentale al proveedor sobre el servicio"
                      v-model="compraEditar.observacionesC"
                    ></v-textarea>
                  </v-container>
                </b-col>
                <b-col>
                  <v-container fluid>
                    <v-textarea
                      label="Observaciones Proveedor"
                      no-resize
                      rows="2"
                      :value="value"
                      placeholder="Cuentale a tu cliente tus condiciones"
                      v-model="compraEditar.observacionesP"
                    ></v-textarea>
                  </v-container>
                </b-col>
              </b-row>
            </b-form-group>
          </b-card>

          <!--Info Agregar-->
          <b-button class="btn-success my-2 mx-4" type="submit"
            >Compartir mi Decisión</b-button
          >
          <b-button
            class="my-2 mx-4"
            variant="outline-primary"
            type="submit"
            @click="editar = false"
            >Volver más tarde</b-button
          >
          <b-button class="btn-gray my-2 mx-4" @click="borrar()"
            >Borrar Datos</b-button
          >
        </form>
        <br />
      </b-card>
    </b-container>

    <!--Edicion de la calificacion -->

    <b-container>
      <b-card bg-variant="light" v-if="experiencia & !editar">
        <br />
        <b-form-group
          label-cols-lg="3"
          label="Soy:"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <v-radio-group v-model="row" row>
            <v-radio label="Cliente" value="radio-1"></v-radio>
            <v-radio label="Proveedor" value="radio-2"></v-radio>
          </v-radio-group>
        </b-form-group>

        <form @submit.prevent="editarExperiencia(starEditar)">
          <!--Info Cliente-->
          <b-card bg-variant="light">
            <br />

            <input
              type="text"
              class="form-control my-2"
              placeholder="Cliente"
              v-model="starEditar.cliente"
            />

            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-username"
                placeholder="E-mail"
                v-model="starEditar.clienteemail"
              ></b-form-input>
            </b-input-group>

            <br />

            <b-form @submit.stop.prevent>
              <b-form-input
                type="password"
                id="text-password"
                placeholder="Ingrese su Contraseña"
                aria-describedby="password-help-block"
                v-model="starEditar.contraseñaC"
              ></b-form-input>
              <b-form-text id="password-help-block">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </b-form-text>
            </b-form>

            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
              >Remember me</b-form-checkbox
            >

            <b-row>
              <div class="w-100"></div>
              <b-col><b-button class="btn-success">Ingresar</b-button></b-col>
              <b-col
                ><b-button class="btn-warning">Registrarme</b-button></b-col
              >
              <b-col><b-button class="btn-danger">Salir</b-button></b-col>
            </b-row>
          </b-card>

          <br />
          <!--Info Proveedor-->
          <b-card bg-variant="light">
            <br />

            <input
              type="text"
              class="form-control my-2"
              placeholder="Proveedor"
              v-model="starEditar.proveedor"
            />

            <b-form-input
              list="input-list"
              id="input-with-list"
              placeholder="Servicio"
              v-model="starEditar.servicio"
            ></b-form-input>
            <b-form-datalist
              id="input-list"
              :options="options"
            ></b-form-datalist>
            <br />

            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-username"
                placeholder="E-mail"
                v-model="starEditar.proveedoremail"
              ></b-form-input>
            </b-input-group>

            <br />

            <b-form @submit.stop.prevent>
              <b-form-input
                type="password"
                id="text-password"
                placeholder="Ingrese su Contraseña"
                aria-describedby="password-help-block"
                v-model="starEditar.contraseñaP"
              ></b-form-input>
              <b-form-text id="password-help-block">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </b-form-text>
            </b-form>

            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
              >Remember me</b-form-checkbox
            >

            <b-row>
              <div class="w-100"></div>
              <b-col><b-button class="btn-success">Ingresar</b-button></b-col>
              <b-col
                ><b-button class="btn-warning">Registrarme</b-button></b-col
              >
              <b-col><b-button class="btn-danger">Salir</b-button></b-col>
            </b-row>
          </b-card>
          <br />

          <!--Info Servicio-->

          <b-card bg-variant="light">
            <b-form-group
              label-cols-lg="3"
              label="Información del servicio"
              label-size="lg"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-row>
                <div class="w-100"></div>

                <b-col>
                  Experiencia con el Cliente:
                  <b-form-rating
                    v-model="starEditar.calificacionC"
                    show-value
                  ></b-form-rating>
                </b-col>
                <b-col>
                  Experiencia con el Proveedor:
                  <b-form-rating
                    v-model="starEditar.calificacionP"
                    show-value
                  ></b-form-rating>
                </b-col>

                <div class="w-100"></div>

                <b-col>
                  <v-container fluid>
                    <v-textarea
                      label="Review Cliente:"
                      no-resize
                      rows="3"
                      placeholder="Cuentanos tu experiencia..."
                      v-model="starEditar.reviewC"
                    ></v-textarea>
                  </v-container>
                </b-col>
                <b-col>
                  <v-container fluid>
                    <v-textarea
                      label="Review Proveedor:"
                      no-resize
                      rows="3"
                      placeholder="Cuentanos tu experiencia..."
                      v-model="starEditar.reviewP"
                    ></v-textarea>
                  </v-container>
                </b-col>
                <div class="w-100"></div>

                <b-col>
                  <v-switch
                    v-model="starEditar.denunciarC"
                    inset
                    :label="`Denunciar Cliente: ${starEditar.denunciarC.toString()}`"
                  ></v-switch>
                </b-col>
                <b-col>
                  <v-switch
                    v-model="starEditar.denunciarP"
                    inset
                    :label="`Denunciar Proveedor: ${starEditar.denunciarP.toString()}`"
                  ></v-switch>
                </b-col>
              </b-row>
            </b-form-group>
          </b-card>

          <!--Info Agregar-->
          <b-button class="btn-warning my-2 mx-4" type="submit"
            >Enviar mi Calificación</b-button
          >

          <b-button
            class="my-2 mx-4"
            variant="outline-primary"
            type="submit"
            @click="experiencia = false"
            >Volver más tarde</b-button
          >
        </form>
        <br />
      </b-card>
    </b-container>

    <!--VISTA -->

    <b-container>
      <b-card bg-variant="light" v-if="vista">
        <br />
        <b-form-group
          label-cols-lg="3"
          label="Soy:"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <v-radio-group v-model="row" row>
            <v-radio label="Cliente" value="radio-1"></v-radio>
            <v-radio label="Proveedor" value="radio-2"></v-radio>
          </v-radio-group>
        </b-form-group>

        <form @submit.prevent="editarExperiencia(starEditar)">
          <!--Info Cliente-->
          <b-card bg-variant="light">
            <br />

            <v-text-field
              v-model="starEditar.cliente"
              label="Cliente"
              disabled
            ></v-text-field>

            <v-text-field
              v-model="starEditar.clienteemail"
              label="E-mail"
              disabled
            ></v-text-field>
          </b-card>

          <br />
          <!--Info Proveedor-->

          <b-card bg-variant="light">
            <br />

            <v-text-field
              v-model="starEditar.proveedor"
              label="Cliente"
              disabled
            ></v-text-field>

            <v-text-field
              v-model="starEditar.proveedoremail"
              label="E-mail"
              disabled
            ></v-text-field>
          </b-card>

          <br />

          <!--Info Servicio-->

          <b-card bg-variant="light">
            <b-form-group
              label-cols-lg="3"
              label="Información del servicio"
              label-size="lg"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-row>
                <b-col>
                  <v-text-field
                    v-model="starEditar.estado"
                    label="Estado del Servicio"
                    disabled
                  ></v-text-field>
                </b-col>
                <b-col>
                  <v-text-field
                    v-model="starEditar.fechaServicio"
                    label="Tu servicio se llevará acabo el:"
                    disabled
                  ></v-text-field>
                </b-col>

                <div class="w-100"></div>

                <b-col>
                  <v-text-field
                    v-model="starEditar.fechaModificacion"
                    label="Fecha de Respuesta:"
                    disabled
                  ></v-text-field>
                </b-col>
                <b-col>
                  <v-text-field
                    v-model="starEditar.fechaAceptacion"
                    label="Fecha Aceptación Servicio:"
                    disabled
                  ></v-text-field>
                </b-col>
                <div class="w-100"></div>

                <b-col>
                  <v-text-field
                    v-model="starEditar.precioPactado"
                    label="Precio Acordado:"
                    disabled
                  ></v-text-field>
                </b-col>
                <b-col>
                  <v-text-field
                    v-model="starEditar.direccionServicio"
                    label="Dirección del Servicio:"
                    disabled
                  ></v-text-field>
                </b-col>

                <div class="w-100"></div>

                <b-col>
                  <v-text-field
                    v-model="starEditar.observacionesC"
                    label="Observaciones del Cliente:"
                    disabled
                  ></v-text-field>
                </b-col>
                <b-col>
                  <v-text-field
                    v-model="starEditar.observacionesP"
                    label="Observaciones del Proveedor:"
                    disabled
                  ></v-text-field>
                </b-col>

                <div class="w-100"></div>

                <b-col>
                  Experiencia con el Cliente:
                  <b-form-rating
                    v-model="starEditar.calificacionC"
                    show-value
                    disabled
                  ></b-form-rating>
                </b-col>
                <b-col>
                  Experiencia con el Proveedor:
                  <b-form-rating
                    v-model="starEditar.calificacionP"
                    show-value
                    disabled
                  ></b-form-rating>
                </b-col>

                <div class="w-100"></div>

                <b-col>
                  <v-text-field
                    v-model="starEditar.reviewC"
                    label="La experiencia del Cliente:"
                    disabled
                  ></v-text-field>
                </b-col>
                <b-col>
                  <v-text-field
                    v-model="starEditar.reviewP"
                    label="La experiencia del Proveedor:"
                    disabled
                  ></v-text-field>
                </b-col>
                <div class="w-100"></div>

                <b-col>
                  <v-switch
                    v-model="starEditar.denunciarC"
                    inset
                    :label="`Denunciar Cliente: ${starEditar.denunciarC.toString()}`"
                    disabled
                  ></v-switch>
                </b-col>
                <b-col>
                  <v-switch
                    v-model="starEditar.denunciarP"
                    inset
                    :label="`Denunciar Proveedor: ${starEditar.denunciarP.toString()}`"
                    disabled
                  ></v-switch>
                </b-col>
              </b-row>
            </b-form-group>
          </b-card>

          <!--Info Agregar-->

          <b-button
            class="my-2 mx-4"
            variant="outline-primary"
            type="submit"
            @click="vista = false"
            >Volver</b-button
          >
        </form>
        <br />
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  // FECHA SERVICIO
  data: () => ({
    //OBSERVCAION CLIENTE
  }),

  data() {
    return {
      //ESTE ES EL CONTENEDOR 1
      compras: [],
      //V-model
      compra: {
        cliente: "",
        clienteemail: "",
        contraseñaC: "",
        proveedor: "",
        servicio: "",
        proveedoremail: "",
        contraseñaP: "",
        estado: "",
        fechaServicio: "",
        precioPactado: "",
        direccionServicio: "",
        experienciaC: "",
        experienciaP: "",
        reviewC: "",
        reviewP: "",
        denunciarC: false,
        denunciarP: false,
      },

      //SERVICIO
      selected: null,
      options: ["Aseo General", "Electricidad Hogar", "Lavandería"],
      //EDITAR
      editar: false,
      compraEditar: {},
      //EDITAR
      experiencia: false,
      starEditar: {},
      //VISTA
      vista: false,

      //ESTDO1
      estado: ["En proceso", "Aceptado", "Denegado"],
      //ALERTA 3
      mensaje: { color: "success", texto: "" },
      dismissSecs: 5,
      dismissCountDown: 0,
    };
  },
  created() {
    //LLAMADO AL METODO 1
    this.listarContactos();
  },
  methods: {
    //LISTAR CONTACTOS1
    listarContactos() {
      this.axios
        .get("/carrito")
        .then((res) => {
          console.log(res.data);
          this.compras = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    //AGREGAR SERVICIO
    agregarServicio() {
      //aca se usa el contacto de v-model
      this.axios
        .post("/nuevo-carrito", this.compra)
        .then((res) => {
          this.compras.push(res.data);
          this.compra.cliente = "";
          this.compra.clienteemail = "";
          this.compra.contraseñaC = "";
          this.compra.proveedor = "";
          this.compra.servicio = "";
          this.compra.proveedoremail = "";
          this.compra.contraseñaP = "";
          this.compra.estado = "Estado";
          this.compra.precioPactado = "";
          this.compra.direccionServicio = "";
          this.compra.calificacionP = "";
          this.compra.calificacionC = "";
          this.compra.experienciaC = "";
          this.compra.experienciaP = "";
          this.compra.reviewC = "";
          this.compra.reviewP = "";
          this.compra.fechaServicio = "";
          this.compra.denunciarC = false;
          this.compra.denunciarP = false;
          this.compra.observacionesC = "";
          this.compra.observacionesP = "";

          //llamo alerta implementada
          this.mensaje.color = "success";
          this.mensaje.texto =
            "Gracias por utilizar Servi Hogar, tu Proveedor se comunicará contigo.";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    eliminarCompra(id) {
      this.axios
        .delete(`/carrito/${id}`)
        .then((res) => {
          const index = this.compras.findIndex(
            (item) => item._id === res.data._id
          );
          this.compras.splice(index, 1);
          this.mensaje.color = "success";
          this.mensaje.texto = "Servicio Eliminado Exitosamente";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    // ACTIVAR FORMULARIO EDICION PROVEEDOR
    activarEdicion(id) {
      this.editar = true;
      //ME TRAIGA
      this.axios
        .get(`/carrito/${id}`)
        .then((res) => {
          this.compraEditar = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    // ACTIVAR FORMULARIO EDICION Star
    activarEdicionStar(id) {
      this.editar = false;
      this.experiencia = true;
      //ME TRAIGA
      this.axios
        .get(`/carrito/${id}`)
        .then((res) => {
          this.starEditar = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    // ACTIVAR VISTA
    activarVista(id) {
      this.editar = false;
      this.experiencia = false;
      this.vista = true;
      //ME TRAIGA
      this.axios
        .get(`/carrito/${id}`)
        .then((res) => {
          this.starEditar = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    editarServicio(item) {
      this.axios
        .put(`/carrito/${item._id}`, item)

        .then((res) => {
          const index = this.compras.findIndex((n) => n._id === res.data._id);

          this.compras[index].cliente = res.data.cliente;
          this.compras[index].clienteemail = res.data.clienteemail;
          this.compras[index].contraseñaC = res.data.contraseñaC;
          this.compras[index].proveedor = res.data.proveedor;
          this.compras[index].servicio = res.data.servicio;
          this.compras[index].proveedoremail = res.data.proveedoremail;
          this.compras[index].contraseñaP = res.data.contraseñaP;
          this.compras[index].estado = res.data.estado;
          this.compras[index].precioPactado = res.data.precioPactado;
          this.compras[index].direccionServicio = res.data.direccionServicio;
          this.compras[index].calificacionP = res.data.calificacionP;
          this.compras[index].calificacionC = res.data.calificacionC;
          this.compras[index].experienciaC = res.data.experienciaC;
          this.compras[index].experienciaP = res.data.experienciaP;
          this.compras[index].reviewC = res.data.reviewC;
          this.compras[index].reviewP = res.data.reviewP;
          this.compras[index].fechaServicio = res.data.fechaServicio;
          this.compras[index].denunciarC = res.data.denunciarC;
          this.compras[index].denunciarP = res.data.denunciarP;
          this.compras[index].observacionesC = res.data.observacionesC;
          this.compras[index].observacionesP = res.data.observacionesP;

          this.mensaje.color = "success";
          this.mensaje.texto =
            "Se le ha comunicado al cliente tu desición sobre el servicio.";
          this.showAlert();
          this.editar = false;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    editarExperiencia(item) {
      this.axios
        .put(`/carrito/${item._id}`, item)

        .then((res) => {
          const index = this.compras.findIndex((n) => n._id === res.data._id);

          this.compras[index].calificacionP = res.data.calificacionP;
          this.compras[index].calificacionC = res.data.calificacionC;
          this.compras[index].reviewC = res.data.reviewC;
          this.compras[index].reviewP = res.data.reviewP;
          this.compras[index].denunciarC = res.data.denunciarC;
          this.compras[index].denunciarP = res.data.denunciarP;

          this.mensaje.color = "success";
          this.mensaje.texto =
            "Gracias por contarnos sobre tu experiencia usando Servihogar";
          this.showAlert();
          this.experiencia = false;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    //BORRAR
    borrar() {
      this.compraEditar.cliente = "";
      this.compraEditar.clienteemail = "";
      this.compraEditar.contraseñaC = "";
      this.compraEditar.proveedor = "";
      this.compraEditar.servicio = "";
      this.compraEditar.proveedoremail = "";
      this.compraEditar.contraseñaP = "";
      this.compraEditar.estado = "Estado";
      this.compraEditar.precioPactado = "";
      this.compraEditar.direccionServicio = "";
      this.compraEditar.calificacionP = "";
      this.compraEditar.calificacionC = "";
      this.compraEditar.experienciaC = "";
      this.compraEditar.experienciaP = "";
      this.compraEditar.reviewC = "";
      this.compraEditar.reviewP = "";
      this.compraEditar.fechaServicio = "";
      this.compraEditar.denunciarC = false;
      this.compraEditar.denunciarP = false;
      this.compraEditar.observacionesC = "";
      this.compraEditar.observacionesP = "";
    },

    // ALERTA 3
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<style>
</style>