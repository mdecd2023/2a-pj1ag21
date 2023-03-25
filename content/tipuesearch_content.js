var tipuesearch = {"pages": [{'title': 'About', 'text': '組員:41023137 林峻源 41023116 吳勁毅 \n 倉儲: https://github.com/mdecd2023/2a-pj1ag21 \n 網站: https://mdecd2023.github.io/2a-pj1ag21/content/index.html \n', 'tags': '', 'url': 'About.html'}, {'title': 'progress', 'text': 'w1:講解課程評分 \n w2:228連假放假 \n w3:製作靜態網站 \n w4:BubbleRub tutorial 製作結果與心得 \n', 'tags': '', 'url': 'progress.html'}, {'title': '心得', 'text': '', 'tags': '', 'url': '心得.html'}, {'title': '41023116吳勁毅心得', 'text': 'W1: 因為寒假期間電腦送修資料遺失 所以再重新用的時候費了很大的時間才用回來 還好組員友會一些不然可能進度將嚴重落後 \n W2: 228放假 \n W3: 因為clone的問題所以進度慢了一個禮拜,今天用成功了,所以我會盡力趕上進度 \n W4: 本周自評,不敢給自己打高分,覺得自己做的內容還不夠充分 \n W5: 建立考試帳號,可是我遲到,所以沒有建立到,下次不會了 \n', 'tags': '', 'url': '41023116吳勁毅心得.html'}, {'title': '41023137', 'text': 'W1: 老師講解課程評分 \n W2: 228連假放假 \n W3: 建立靜態網站，感謝同學的幫忙 \n W4: BubbleRub tutorial製作 \n W5: 建立Exam帳號 \n', 'tags': '', 'url': '41023137.html'}, {'title': 'Note', 'text': 'W3: \n w3 - 2023.03.10.16 已經完成分組網頁者, 可以得到分組網頁評分 \n w3 - 請各組寫一個程式判定 2a 哪一組已經完成網頁建置. \n w3 開始執行 \xa0 https://mde.tw/pjcopsim/content/bubbleRobTutorial.html \n \n 課程內容:創建以及了解如何共同維護團隊的倉儲 \n W4: \n 協同產品設計實習 tutorial1 自評表單 \n \n W5: \n 2a w5 建立考試帳號 \n \n \n \n https://exam.cycu.org \xa0(2023/3/20 08:14-08:20) 第一階段建立帳號 \n 沒有建立帳號者, 請在以下交談登錄學號 \n 本學期, 要求更改一次帳號對應密碼, 酌扣學期成績五分.\xa0 \n \n \n', 'tags': '', 'url': 'Note.html'}, {'title': 'tutorial1', 'text': '\n 1.球體碰撞模擬 \n \n \n \n 檔案: BALL.ttt \n 2.建立馬達,輪子,感測器及程式 \n \n \n \n \n \xa0 \n 檔案: Wheel.ttt \n \xa0 \xa0 \xa0 \xa0 \xa0 Slider.ttt \n \xa0 \xa0 \xa0 \xa0 \xa0 BubbleRob.ttt \n \n \n \n \n', 'tags': '', 'url': 'tutorial1.html'}, {'title': '問題', 'text': '\n 1.在 coppeliasim 中, scene 與 model 有何不同? \n ANS: \n Scene:是指CoppeliaSim中 包含多個對象的三維環境 ，它是一個虛擬世界，可以在其中添加、移動和編輯各種對象，如機器人、傳感器、物體等。 場景包含了所有的對象和它們之間的關係，可以通過場景來模擬和仿真各種機器人和自動化系統。\n\nModel:則是 場景中的一個具體對象 ，可以是機器人、傳感器、物體等。 每個模型都是由一個或多個三維模型組成，每個模型都可以有自己的運動學、動力學、碰撞檢測等屬性，並且可以與其他模型進行交互。 在CoppeliaSim中，可以通過在場景中添加、複製、移動和刪除模型來創建自己的虛擬世界。\n\n因此，Scene內含多個model，而model是scene中的一個個獨立的東西。在CoppeliaSim中，通過編輯場景和模型來創建複雜的仿真係統和機器人控制應用程序。 \n \n 2.在CoppeliaSim 中, 何謂 clean model?\xa0 \n \n ANS: \n 在CoppeliaSim中，clean model是一個 沒有任何物件或環境設定的模型 。這個模型通常用作建立新場景的起點，並且可以通過從頭開始添加所需的物件和環境設定來構建完整的場景。 使用clean model的好處是，你可以 從頭開始建立自己的場景 ，沒有任何預設物件和環境干擾。這使得創建複雜的場景更加容易，因為你可以 自由地添加和設置你需要的物件和環境設定 ，而 不必先刪除 現有的物件或環境設定。 \n \n 3. 在CoppeliaSim scene 中,如何利用 lua 以及 python 建立 primitive type object, 並利用程式設定物件位置? \n ANS: \n 在CoppeliaSim中，可以使用Lua或Python腳本建立基本物件並設置其位置。 \n 以下是使用Lua腳本創建基本物件的示例： \n -- Create a sphere primitive with a radius of 0.5 objectHandle = sim.createPureShape(1, 18, {0.5, 0.5, 0.5}, 0.01) \n -- Set the position of the object to (1, 2, 3) sim.setObjectPosition(objectHandle, -1, {1, 2, 3}) \n 以上程式碼創建了一個半徑為0.5的球形物件，然後將其位置設置為(1,2,3)。 \n 以下是使用Python腳本創建基本物件的示例： \n import sim \n # Create a sphere primitive with a radius of 0.5 objectHandle = sim.simCreatePureShape(1, 18, [0.5, 0.5, 0.5], 0.01) \n # Set the position of the object to (1, 2, 3) sim.simSetObjectPosition(objectHandle, -1, [1, 2, 3]) \n 4. CoppeliaSim .ttt 檔案格式與 .simscene.xml 檔案格式有何不同? \n ANS: \n .ttt 文件是CoppeliaSim的舊格式，是 二進制文件 ，其中包含仿真環境的所有元素和設置。 . ttt 文件不能直接使用文本編輯器進行編輯 ，需要使用CoppeliaSim的GUI進行操作。此外， .ttt 文件中可能包含有一些CoppeliaSim的腳本代碼。 \n .simscene.xml 文件是CoppeliaSim的新格式，是一個 純文本XML文件 。它與 .ttt 文件具有相同的功能，但是它 更易於人類閱讀和編輯 ， 可以使用文本編輯器進行編輯 。此外， .simscene.xml 文件不包含CoppeliaSim的腳本代碼，這使得它更加通用且易於與其他工具進行集成。 \n \n', 'tags': '', 'url': '問題.html'}, {'title': 'tutorial1 心得', 'text': '\n 41023116吳勁毅: 起初做的時候還滿滿順利,但是做到一些步驟之後卡住了,做到半夜還沒結束,但好在有朋友的幫忙,讓我可以順利做完 \n', 'tags': '', 'url': 'tutorial1 心得.html'}, {'title': '專案規劃', 'text': '\n \n \n 確定專題和目標 ：確定專題和目標，這通常是由老師或導師指定或學生自己選擇的。 \n 確定你的專題和目標，可以幫助你更好地了解你需要進行的工作 \n \n 搜集信息 ：收集所有有關專題和目標的資料，這可能包括文獻和報告，調查結果，實驗數據等 。 \n \n \n 制定計劃 ：制定一個詳細的計劃，包括時間表，預算和可行性分析。可制定 時間表，預算和可行性分析。這有助於確定必要的資源，例如人力，物資和技術，並確保你在時間和預算方面能夠順利完成你的專案。 \n \n \n 確定研究方法 ：確定研究方法，以確保你能夠完成所需的工作。問卷調查，實驗，測試等。 \n \n \n 準備文獻綜述和研究報告 ：這是專題研究中必須進行的步驟。這需要你進行文獻綜述和報告撰寫，以分析和評估你所收集到的所有資訊。 \n \n 分析資料 ：對收集到的資料和信息進行分析，以得出結論和結果。包括使用統計軟件進行分析和繪製圖表 \n \n 完成專案 ：完成專案，並準備演示文稿或口頭報告。展示你所完成的工作。 \n \n \n 評估和報告 ：評估你的工作和成果，並撰寫一份綜合報告。這可以幫助你理解你的成果和過程。 \n \n \n 專案規劃需要詳細的計劃和準備，並且可能需要進一步的研究和分析。同時，專案規劃需要學生和老師的密切合作和溝通，以確保專案能夠成功完成。', 'tags': '', 'url': '專案規劃.html'}]};