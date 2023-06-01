from tkinter import *
window=Tk()
counter=0
#이벤트 핸들러(콜백 함수)작성
def clicked():
    global counter # 전역 변수 counter를 사용하겠다라는 의미
    counter+=1
    #Label의 text 속성을 변경하고 있다.
    label["text"]="버튼 클릭 횟수: "+str(counter)

def clicked2():
    global counter # 전역 변수 counter를 사용하겠다라는 의미
    counter=0
    #Label의 text 속성을 변경하고 있다.
    label["text"]="리셋되어짐 "+str(counter)

if __name__=="__main__":
    label=Label(window,text="아직 클릭되지 않았음")
    label.pack()
    button=Button(window,text="증가",command=clicked)
    button2=Button(window,text="리셋",command=clicked2)
    button.pack()
    button2.pack()
    window.mainloop()

