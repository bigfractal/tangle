Hello, everybody. Welcome to the first episode of Big Fractal Tangle. My name is Timothy Falconer. I am a, a software
developer and manager and consultant. I've been doing this for more than 30 years and this series is my attempt to teach
you what I know. Now, that is a big topic. So rather than do the usual youtube or linkedin learning tutorials that cover
topics with both too much and too little detail. I'm gonna be taking a different approach. One that is improvised,
holistic and practical by improvised. I mean that I'm not going to follow a plan. Everything is unscripted. I'm going to
record from the very beginning onward live and whether I speed things up or not, you're gonna get to see everything that
I see. Consider me um a pair programmer who is teaching you how to do something practical uh and providing context along
the way by holistic. I mean that we're gonna be covering all the topics, you know, whether you consider yourself just a
coder or a manager or a CTO or a UX designer. It doesn't matter. I'm covering all of these things because I believe that
people should be generalists, I think that you should know how to do all the jobs, whether you specialize in a
particular area or not, everything is connected to everything else. And the more that you know, this, the better you'll
be able to communicate with your coworkers and the more you'll be able to anticipate the special needs of other people
in your team by practical. I mean, that we're going to build something real as we do this, you'll be able to use the
code that I'm creating to make your own work as well. So no pet shop demos here. This is going to be immediately useful.
No matter where you dive in each episode will be no more than 20 minutes in length. And I'll be releasing three of these
a week on Monday, Wednesday and Friday at 6 a.m. GMT. Each episode will also have an article on the website so you can
follow by text if you'd rather do it that way. And there are going to be links throughout the course to future deep
dives. So that uh if you feel like you need more information in a particular course, let me know and I'll make a branch
at that point. Let's start detailing topics with some Superfast mirror brainstorming. So this is what sets it apart
initially is that I wanna teach how to do all jobs we're gonna learn on demand as needed as opposed to what is normally
done in places like Linton learning where they go. Hm. Ok. Let's learn about spring. So then you just, like, spend five
or 10 hours just learning about one topic. But the truth is none of these lessons teach you how everything is connected
to each other. You don't know, for instance, how to make spring and react to work with each other or how to enable
behavior driven development or any of these different things, they don't tie the threads together. One of the primary
tent poles of this course is learning react. And um so let's do the next one which is uh spring. All right. So this
feels different than these. This is full stack development. This is, you know, technically what's called DEV ops. Now
speeding through my brainstorming, you can see that I'm trying to put all of the tools that you would use on a complex
software project in the context and especially focusing on what one person could reasonably learn. OK. So this is uh
initial take at the Big Fractal tangle. It looks like a lot of things to learn. And honestly, I'd say most of these
things are their own linkedin learning courses. The plan is to teach just enough so that people understand what all
these pieces mean, why they're useful and and how to dig deeper all the while making the website for Big Fractal tangle,
which initially will be kind of like a blog website, but it'll, it'll get bigger and bigger as we go. So this is gonna
be a full development project from end to end as you can see the orange side here is more towards the product side. So
related to product managers, architects, designers. And then the middle part is traditional development team based
traditional development. And then the right side is the dev op side where infrastructure is handled. Now, the reason for
splitting things up this way is that these tend to be parallel but separately managed on top of all of it, tying
everything together will be three tools confluence, which is a Wiki space Jira, which is an issue tracker and github,
which is a version control repository. All the artifacts are ultimately going to be in these three things. Some of the
larger items that will be discussed, concept of value stream delivery, which is a new way of delivering software. Of
course, everything in software is never new. It's just a new way of framing a lot of best practices people who are
familiar with with agile will feel right at home. The one thing that value stream is very much focused on is down here,
metrics, everything is really driven by kpis and metrics. We'll talk a lot about that. Now, on the other side,
infrastructure's code is a central principle which is you should be able to push a button and create the environment no
matter what you want and not rely upon manual steps. This is one of the best ways to create stability and predictability
down below here is observable. Now, this is using tools that in the past have been called application performance
monitoring tools such as Dino Trace. But my view of them and I think really the current view of them is that they are
much more useful as an end to end, top to bottom observ ability platform. And so we'll talk a lot about that. Now in
between, there's a bunch of specific tools which I have experience with and we're going to use to build something out.
Most of these tools are replaceable, like you don't have to use react, you could use angular, you don't have to use
spring, you can use node. And ultimately, if, if there is interest in creating branches of the course that focus on
different pieces of this puzzle, then I will. But for now this is my stack that I'm gonna be using. Now in the middle,
everything is tied together by Scrum, which is a very specific way of doing agile for teams and anchored at the bottom
by automated testing. Everything is really tied into some form or another of automated testing, everything over on this
side and everything on this side and really everything between Scrum here is built upon this little tree trunk of
automated testing. So we'll be talking a lot about that. The next step is going to be creating our environment to be
able to build with these tools. So I've created a brand new Mac account. It's uh on the same machine as my, my normal
Mac account. They try to walk you through getting to the point where you can follow along with the series. So first
things, first, let's get rid of this, uh Apple Proft. The only thing I've done so far is I put in one password, which is
my password manager and I show you, which is allowing me to record this. All right. So I got everything. But this first
thing I need to do is install chrome. And so I'll open up Safari. I use Safari basically to install chrome. That's it.
So I'm gonna download Chrome. I highly recommend you use chrome for development because there's a lot of tools that work
with it that work with other tools. Um You can use Firefox as well, but I'm gonna be using chrome as you can see, I'm
letting things play out in real time rather than speeding them up. I'm doing this for those that want to watch all the
steps. If you're wondering why am I watching them? Install chrome? I suggest just going into a meditative mindset and
follow along by the way, if you hear it in the background, I have a parrot who is happily playing his coconut. So it
says, do you really want to use your chrome as your default browser? Yes. Now please pardon the awkward jump, cut to the
past as I create a brand new Google account so that I can separate it from the rest of my world, which is something I do
for every project. All right. So I'm gonna try to get an account called Big Fractal. All right. It's taken about, I use
one password for all of my passwords. It's actually been years since I've remembered a single password or use one. this
is a really good practice to get into it increases security enormously. Um You can pretty much copy and paste any
password. You ever need. Another reason for letting things play out in real time is that it, it kind of sets the tone
for the over my shoulder pair programming approach to this series. There's, um, there's a lot of small things that you
don't think you need to know that just kind of come out, then you just click continue in a new chrome profile. Um So it
kind of does it for you and welcome big. Um That's not a bad color. You go into manage your Google account and then it's
here and I think I had one from before and downloads good. Ok. So, and it should show up here. Um I think you gotta
wait. All right, I'll come back. All right. So now that I have this account, uh I can make my own toolbar bookmarks the
whole bit. Uh That's the real benefit of it and I can switch easily without messing up anything else? And finally I'm
going to put the Bookmark Bar on. So that's it for this episode. Next time I'm going to do more setup, uh starting with
some deep dive command line stuff. So stay tuned. Thanks for watching.