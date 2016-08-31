//
//  ViewController.swift
//  Pozi
//
//  Created by James Campbell on 8/31/16.
//  Copyright © 2016 pozi. All rights reserved.
//

import WebKit
import UIKit

class ViewController: UIViewController {
    
    let webview = WKWebView()

    override func viewDidLoad() {
        super.viewDidLoad()
        
        webview.frame = view.frame
        view.addSubview(webview)
        
        if let url = NSBundle.mainBundle().URLForResource("index", withExtension: "html", subdirectory: "web") {
            let request = NSURLRequest(URL: url)
            webview.loadRequest(request)
        } else {
            debugPrint("Error: Couldn't load app")
        }
    }
}

