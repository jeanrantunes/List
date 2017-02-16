/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.tcc.listaContatos;
import android.graphics.Bitmap;
import android.os.Debug;
import android.os.Bundle;
import org.apache.cordova.*;
import org.apache.cordova.engine.SystemWebView;
import org.apache.cordova.engine.SystemWebViewClient;
import org.apache.cordova.engine.SystemWebViewEngine;

import android.content.Context;
import java.io.File;

import android.util.Log;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class MainActivity extends CordovaActivity
{
    long start = System.currentTimeMillis();
    //WebView wv= (WebView) this.appView.getView();
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml

String ss = "12.3";
        Double d = ParseInt(ss);
        loadUrl(launchUrl, start);

        //Log.i("teste", this.appView.getView().toString());


        /*long time = System.currentTimeMillis() - start;
        Toast.makeText(this, "Time:"+launchUrl, Toast.LENGTH_LONG).show();
        Log.i("Pathurl", launchUrl);*/
    }

}
