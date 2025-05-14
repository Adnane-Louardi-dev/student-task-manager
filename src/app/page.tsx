import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  ClipboardList,
  FileText,
  FolderKanban,
  GraduationCap,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 px-5 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold text-teal-600">
            <GraduationCap className="h-6 w-6" />
            <span>Student Task Manager</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-4">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-teal-600"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-teal-600"
              >
                How It Works
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-teal-600"
              >
                Testimonials
              </Link>
              <Button className="bg-teal-600 hover:bg-teal-700 transition-colors duration-300" asChild>
                <Link href="#cta">Start Organizing</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-teal-50 via-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border border-teal-200 bg-white px-3 py-1 text-sm text-teal-600 shadow-sm">
                  <span className="font-medium">New Features Available</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    <span className="text-teal-600">Master</span> Your Student Life
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    A task management platform designed specifically for university students. Organize your academic
                    life efficiently with deadlines, categories, and progress tracking.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-700 transition-all duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg"
                    asChild
                  >
                    <Link href="#cta">Start Organizing</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal-200 text-teal-600 hover:bg-teal-50 transition-all duration-300"
                    asChild
                  >
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 opacity-30 blur-xl"></div>
                  <Image
                    src="/header_image.png"
                    width={550}
                    height={450}
                    alt="Student Task Manager Dashboard"
                    className="relative rounded-lg object-cover shadow-xl transition-all duration-300 hover:shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-600">
                <span className="font-medium">Features</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Organize Your Academic Life
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Student Task Manager provides all the tools you need to stay on top of your university workload.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
              <Card className="group flex flex-col items-center text-center border-none shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-b from-white to-teal-50/30 overflow-hidden">
                <CardHeader className={'w-full justify-items-center'}>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 p-4 mb-2 transition-transform duration-300 group-hover:scale-110">
                    <ClipboardList className="h-10 w-10 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Tasks</CardTitle>
                  <CardDescription className="text-gray-600 w-full">
                    Create, organize, and track your daily tasks with ease
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Set priorities, deadlines, and reminders for all your assignments and exams.
                  </p>
                </CardContent>
              </Card>
              <Card className="group flex flex-col items-center text-center border-none shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
                <CardHeader className={'w-full justify-items-center'}>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 p-4 mb-2 transition-transform duration-300 group-hover:scale-110">
                    <FolderKanban className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Projects</CardTitle>
                  <CardDescription className="text-gray-600">
                    Manage complex projects with milestones and subtasks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Break down large projects into manageable chunks and track your progress.
                  </p>
                </CardContent>
              </Card>
              <Card className="group flex flex-col items-center text-center border-none shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-b from-white to-teal-50/30 overflow-hidden">
                <CardHeader className={'w-full justify-items-center'}>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 p-4 mb-2 transition-transform duration-300 group-hover:scale-110">
                    <BookOpen className="h-10 w-10 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">TPs (Travaux Pratiques)</CardTitle>
                  <CardDescription className="text-gray-600">
                    Organize your practical work sessions efficiently
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Keep track of lab work, experiments, and practical assignments with specialized tools.
                  </p>
                </CardContent>
              </Card>
              <Card className="group flex flex-col items-center text-center border-none shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
                <CardHeader className={'w-full justify-items-center'}>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 p-4 mb-2 transition-transform duration-300 group-hover:scale-110">
                    <FileText className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">TDs (Travaux Dirigés)</CardTitle>
                  <CardDescription className="text-gray-600">
                    Never miss a tutorial or directed study session
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Organize your tutorial work, problem sets, and study groups in one place.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-teal-50 via-white to-blue-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-600">
                <span className="font-medium">How It Works</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Simple Steps to Academic Success
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our streamlined process helps you stay organized with minimal effort.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-4 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] h-1 bg-gradient-to-r from-teal-400 to-blue-500 transform -translate-y-1/2 rounded-full"></div>

              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg transition-transform duration-300 hover:scale-110">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">Add</h3>
                <p className="mt-2 text-gray-600">Create tasks, projects, TPs, and TDs with all relevant details</p>
              </div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-blue-500 text-white shadow-lg transition-transform duration-300 hover:scale-110">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">Organize</h3>
                <p className="mt-2 text-gray-600">Categorize, prioritize, and set deadlines for your academic work</p>
              </div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transition-transform duration-300 hover:scale-110">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">Track</h3>
                <p className="mt-2 text-gray-600">Monitor your progress and receive timely reminders</p>
              </div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transition-transform duration-300 hover:scale-110">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">Succeed</h3>
                <p className="mt-2 text-gray-600">Complete your work on time and achieve your academic goals</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-600">
                <span className="font-medium">Testimonials</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">What Students Say</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from students who have transformed their academic life with Student Task Manager.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card className="group border-none shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-b from-white to-teal-50/30">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600"></div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">Youssef</CardTitle>
                      <CardDescription className="text-gray-600">Computer Science Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-teal-200">"</div>
                    <p className="pt-2 text-gray-600 italic">
                      Student Task Manager helped me organize my programming assignments and lab work. I've never been
                      more productive!
                    </p>
                    <div className="flex mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group border-none shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-b from-white to-blue-50/30">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">Yasmine</CardTitle>
                      <CardDescription className="text-gray-600">Engineering Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-blue-200">"</div>
                    <p className="pt-2 text-gray-600 italic">
                      The TP and TD tracking features are game-changers. I can finally keep all my practical work
                      organized in one place.
                    </p>
                    <div className="flex mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group border-none shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-b from-white to-teal-50/30">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-blue-500"></div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">Omar</CardTitle>
                      <CardDescription className="text-gray-600">Medical Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-teal-200">"</div>
                    <p className="pt-2 text-gray-600 italic">
                      As a medical student with a packed schedule, this app has been essential for keeping track of my
                      studies and lab work.
                    </p>
                    <div className="flex mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          id="cta"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-teal-500 to-blue-600 text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="grid content-center items-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Academic Life?
                </h2>
                <p className="text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of students who are already mastering their university workload with Student Task
                  Manager.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2 sm:flex-row">
                  <input
                    className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-500"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-white text-teal-600 hover:bg-white/90 transition-all duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg"
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-white/80">Free to try. No credit card required.</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button
                  size="lg"
                  className="gap-1 bg-white text-teal-600 hover:bg-white/90 group transition-all duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg"
                  asChild
                >
                  <Link href="#cta">
                    Start Organizing
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-white p-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          <div className="flex items-center gap-2 text-lg font-semibold text-teal-600">
            <GraduationCap className="h-5 w-5" />
            <span>Student Task Manager</span>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-300">
              Contact
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-teal-600 transition-colors duration-300">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-pink-600 transition-colors duration-300">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-700 transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="container mt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Student Task Manager. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
