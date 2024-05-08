package com.example.vehicalinsurance;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class registeractivity extends AppCompatActivity implements View.OnClickListener {

    private EditText Name;
    private EditText Email;
    private EditText Password;
    private Button buttonRegister;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.register_activity);

        Name = findViewById(R.id.user_name);
        Email = findViewById(R.id.email_id);
        Password = findViewById(R.id.pass_word);
        buttonRegister = findViewById(R.id.register_btn);

        buttonRegister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                registerUser();
            }
        });
    }

    private void registerUser() {
        String fullName = Name.getText().toString().trim();
        String email = Email.getText().toString().trim();
        String pass = Password.getText().toString().trim();

        Intent intent = new Intent(registeractivity.this, vehicaldetails.class);

        intent.putExtra("keyfname", fullName);
        intent.putExtra("keyemail", email);
        intent.putExtra("keypassword", pass);

        if (TextUtils.isEmpty(fullName)) {
            Toast.makeText(this, "Please enter your full name", Toast.LENGTH_SHORT).show();
            return;
        }

        if (TextUtils.isEmpty(email)) {
            Toast.makeText(this, "Please enter your email", Toast.LENGTH_SHORT).show();
            return;
        }

        if (TextUtils.isEmpty(pass)) {
            Toast.makeText(this, "Please enter your password", Toast.LENGTH_SHORT).show();
            return;
        }

        Toast.makeText(this, "Registration successful", Toast.LENGTH_SHORT).show();


        startActivity(intent);
        finish();
    }

    @Override
    public void onClick(View v) {
        int id = v.getId();
    }
}

