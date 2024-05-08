package com.example.vehicalinsurance;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class loginactivity extends AppCompatActivity implements View.OnClickListener {
    private Button btn;
    EditText email, pass;

    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.login_activity);
        btn = findViewById(R.id.login_btn);
        btn.setOnClickListener(e -> {
            String nt = email.getText().toString();
            String pt = pass.getText().toString();

            if (nt.equals("raji@gmail.com") && pt.equals("guna07")) {
                // logged in successfully
                Toast.makeText(loginactivity.this, "Logged in Successfully", Toast.LENGTH_LONG).show();

                startActivity(new Intent(loginactivity.this, registeractivity.class));// Navigate to a new Page
            } else {
                Toast.makeText(loginactivity.this, "Incorrect Credentials", Toast.LENGTH_LONG).show();
            }
        });
        email = findViewById(R.id.emailid);
        pass = findViewById(R.id.password);

    }

    @Override
    public void onClick(View view) {
        int id = view.getId();

    }
}