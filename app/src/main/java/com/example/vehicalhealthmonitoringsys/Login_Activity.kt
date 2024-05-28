package com.example.vehicalhealthmonitoringsys

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity

class Login_Activity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.login)

        val email = findViewById<EditText>(R.id.email_id)
        val pass = findViewById<EditText>(R.id.pass_word)
        val button = findViewById<Button>(R.id.login_btn)

        button.setOnClickListener{
            val email1 = email.text.toString()
            val pass1 = pass.text.toString()

            if (validateCredentials(email1, pass1)) {
                Toast.makeText(this, "Login Successful", Toast.LENGTH_SHORT).show()
                val intent = Intent(this, Dashboard_Activity::class.java)
                startActivity(intent)
                finish()
            } else {
                Toast.makeText(this, "Invalid Username or Password", Toast.LENGTH_SHORT).show()
            }
        }
    }

    private fun validateCredentials(email: String, password: String): Boolean {
        return email == "raj23@gmail.com" && password == "guna07"
    }
}
