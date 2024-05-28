package com.example.vehicalhealthmonitoringsys

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class Register_Activity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.register)

        val holderNameEditText = findViewById<EditText>(R.id.name)
        val vehicleNumberEditText = findViewById<EditText>(R.id.vehicleno)
        val chassisNumberEditText = findViewById<EditText>(R.id.chassisno)
        val insuranceNumberEditText = findViewById<EditText>(R.id.insuranceno)
        val licenseNumberEditText = findViewById<EditText>(R.id.licenseno)
        val registerButton = findViewById<Button>(R.id.register_btn)

        registerButton.setOnClickListener {
            val vehicle = Vehicle(
                holderNameEditText.text.toString(),
                vehicleNumberEditText.text.toString(),
                chassisNumberEditText.text.toString(),
                insuranceNumberEditText.text.toString(),
                licenseNumberEditText.text.toString()
            )

            val apiService = RetrofitClient.getService()
            val call = apiService.registerVehicle(vehicle)
            call.enqueue(object : Callback<Void> {
                override fun onResponse(call: Call<Void>, response: Response<Void>) {
                    if (response.isSuccessful) {
                        val intent = Intent(this@Register_Activity, Status_Activity::class.java)
                        intent.putExtra("vehiclenumber", vehicle.vehiclenumber)
                        startActivity(intent)
                    } else {
                        Toast.makeText(this@Register_Activity, "Registration failed", Toast.LENGTH_SHORT).show()
                    }
                }

                override fun onFailure(call: Call<Void>, t: Throwable) {
                    Toast.makeText(this@Register_Activity, "Network failure", Toast.LENGTH_SHORT).show()
                }
            })
        }
    }
}