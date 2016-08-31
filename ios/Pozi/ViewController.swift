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
        
        let insets = UIEdgeInsetsMake(UIApplication.sharedApplication().statusBarFrame.height, 0, 0, 0)
        webview.frame = UIEdgeInsetsInsetRect(view.frame, insets)
        view.addSubview(webview)
        
        if let url = NSBundle.mainBundle().URLForResource("index", withExtension: "html", subdirectory: "web") {
            let request = NSURLRequest(URL: url)
            webview.loadRequest(request)
        } else {
            debugPrint("Error: Couldn't load app")
        }
    }
}

