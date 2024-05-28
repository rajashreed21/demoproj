package com.example.vehicalhealthmonitoringsys

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object RetrofitClient {
    private const val BASE_URL = "https://vehicalhealthmonitoring.onrender.com"
    private val retrofit: Retrofit = Retrofit.Builder()
        .baseUrl(BASE_URL)
        .addConverterFactory(GsonConverterFactory.create())
        .build()

    fun getService(): ApiService {
        return retrofit.create(ApiService::class.java)
    }
}