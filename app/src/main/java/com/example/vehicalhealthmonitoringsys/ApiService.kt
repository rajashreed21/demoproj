package com.example.vehicalhealthmonitoringsys

import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Query

interface ApiService {
    @POST("/Register")
    fun registerVehicle(@Body vehicle: Vehicle): Call<Void>

    @GET("/status")
    fun getVehicleStatus(@Query("vehiclenumber") vehiclenumber: String): Call<vehiclestatus>
}