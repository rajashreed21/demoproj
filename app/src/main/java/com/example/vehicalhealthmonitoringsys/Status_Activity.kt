package com.example.vehicalhealthmonitoringsys

import android.os.Bundle
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class Status_Activity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.status)

        val statusTextView = findViewById<TextView>(R.id.statusview)
        val vehiclenumber = intent.getStringExtra("vehiclenumber")

        val apiService = RetrofitClient.getService()
        val call = apiService.getVehicleStatus(vehiclenumber!!)
        call.enqueue(object : Callback<vehiclestatus> {
            override fun onResponse(call: Call<vehiclestatus>, response: Response<vehiclestatus>) {
                if (response.isSuccessful) {
                    val status = response.body()
                    statusTextView.text = "Engine: ${status!!.engine}, Brake: ${status.brake}, Health: ${status.healthstatus}"
                } else {
                    Toast.makeText(this@Status_Activity, "Failed to retrieve status", Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<vehiclestatus>, t: Throwable) {
                Toast.makeText(this@Status_Activity, "Failed", Toast.LENGTH_SHORT).show()
            }
        })
    }
}