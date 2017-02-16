package com.example.jeanantunes.bubblesortjq;

import android.content.Context;
import android.os.CountDownTimer;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    final Context context = this;
    long start = System.currentTimeMillis();
    private Toast toast;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        final WebView wb = (WebView) findViewById(R.id.webview);
        final String urlJquery = "file:///storage/emulated/legacy/jQueryMobile-bubbleSort/index.html";
        WebSettings webSettings = wb.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setAllowFileAccess(true);
        webSettings.setAllowUniversalAccessFromFileURLs(true);

        wb.setWebViewClient(new WebViewClient() {
            boolean flag = false;
            @Override
            public void onPageFinished(WebView view, String url){
                if(flag == false)
                    flag = true;
                else {
                    long time = System.currentTimeMillis() - start;
                    showToast(time);
                    //Toast.makeText(context, "" + time / 1000.0, Toast.LENGTH_LONG).show();
                }
            }
        });

        wb.loadUrl(urlJquery);
    }
    public void showToast(long time) {
        int duration = 40000;
        toast = Toast.makeText(this,""+time/1000.0, Toast.LENGTH_LONG);
        CountDownTimer countDownTimer;
        countDownTimer = new CountDownTimer(duration, 1000) {
            @Override
            public void onTick(long l) {
                toast.show();
            }

            @Override
            public void onFinish() {
                toast.cancel();
            }
        };
        toast.show();
        countDownTimer.start();

    }
}
