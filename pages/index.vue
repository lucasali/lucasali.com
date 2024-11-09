<script lang="ts" setup>
</script>

<template>
  <div class="flex min-h-dvh items-center justify-center">
    <div class="flex w-full max-w-3xl flex-col gap-4 p-6">
      <section class="group flex w-full items-center justify-between gap-3 rounded-2xl bg-white/80 p-8 shadow-lg ring-2 ring-inset ring-emerald-500/30 backdrop-blur-sm transition-all duration-300 hover:ring-emerald-500">
        <div class="space-y-4">
          <h1 class="animate-fade-in text-3xl font-bold text-gray-800">
            Hello! I'm Lucas <span class="animate-wave inline-block origin-bottom-right">👋</span>
          </h1>

          <p class="text-lg leading-relaxed text-gray-600">
            A passionate <span class="font-semibold text-emerald-500">Software Engineer</span> who loves
            <span class="font-semibold text-emerald-500">building innovative solutions</span>.
          </p>

          <p class="flex items-center gap-2 text-gray-600">
            From Brazil <Icon name="cif:br" class="size-6 rounded-sm" /> • Currently based in Canoas
            <span class="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
              <Icon name="ph:clock-bold" class="size-4" />
              UTC-3
            </span>
          </p>
        </div>

        <div class="size-56 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-blue-500 p-4 text-white shadow-xl transition-all duration-300 hover:rotate-3 hover:scale-105 group-hover:shadow-emerald-200">
          <NuxtImg
            class="translate-y-4 object-fill transition-transform duration-300 group-hover:scale-110"
            src="/img/emoji-hello.png"
            alt="Emoji saying hello"
            loading="eager"
          />
        </div>
      </section>

      <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="group rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-gray-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
          <div class="mb-4 flex items-center gap-2">
            <div class="rounded-lg bg-emerald-100 p-2">
              <Icon name="ph:code-bold" class="size-6 text-emerald-600" />
            </div>
            <h2 class="text-xl font-bold text-gray-800">
              What I Do
            </h2>
          </div>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center gap-2 rounded-lg p-1 transition-colors duration-200 hover:bg-emerald-50">
              <Icon name="ph:check-circle" class="text-emerald-500" />
              Full Stack Development
            </li>
            <li class="flex items-center gap-2 rounded-lg p-1 transition-colors duration-200 hover:bg-emerald-50">
              <Icon name="ph:check-circle" class="text-emerald-500" />
              Cloud Architecture
            </li>
            <li class="flex items-center gap-2 rounded-lg p-1 transition-colors duration-200 hover:bg-emerald-50">
              <Icon name="ph:check-circle" class="text-emerald-500" />
              Software Architecture
            </li>
          </ul>
        </div>

        <div class="rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-gray-200 backdrop-blur-sm">
          <div class="mb-4 flex items-center gap-2">
            <div class="rounded-lg bg-blue-100 p-2">
              <Icon name="ph:stack-bold" class="size-6 text-blue-600" />
            </div>
            <h2 class="text-xl font-bold text-gray-800">
              Tech Stack
            </h2>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-200">TypeScript</span>
            <span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-200">Vue.js</span>
            <span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-200">Node.js</span>
            <span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-200">AWS</span>
            <span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-200">Docker</span>
            <span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-200">PostgreSQL</span>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-gray-200 backdrop-blur-sm">
        <div class="mb-6 flex items-center gap-2">
          <div class="rounded-lg bg-purple-100 p-2">
            <Icon name="ph:briefcase-bold" class="size-6 text-purple-600" />
          </div>
          <h2 class="text-xl font-bold text-gray-800">
            Experience Highlights
          </h2>
        </div>
        <div class="space-y-4">
          <div class="rounded-lg border border-gray-100 p-4 transition-all duration-300 hover:scale-[1.01] hover:border-purple-200 hover:shadow-md">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="font-semibold text-gray-800">
                  Senior Software Engineer
                </h3>
                <p class="text-gray-600">
                  Company Name
                </p>
              </div>
              <span class="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700">2022 - Present</span>
            </div>
            <p class="mt-2 text-sm text-gray-600">
              Led the development of cloud-native applications and mentored junior developers.
            </p>
          </div>
          <!-- Add more experience items as needed -->
        </div>
      </section>

      <!-- Featured Projects -->
      <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="group rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-gray-200 backdrop-blur-sm">
          <div class="mb-4 flex items-center gap-2">
            <div class="rounded-lg bg-amber-100 p-2">
              <Icon name="ph:star-bold" class="size-6 text-amber-600" />
            </div>
            <h2 class="text-xl font-bold text-gray-800">
              Featured Projects
            </h2>
          </div>
          <div class="space-y-3">
            <a href="#" class="block rounded-lg p-3 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-50">
              <h3 class="font-semibold text-gray-800">Project Name</h3>
              <p class="text-sm text-gray-600">Brief description of the project</p>
              <div class="mt-2 flex gap-2">
                <span class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">Vue.js</span>
                <span class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">TypeScript</span>
              </div>
            </a>
            <!-- Add more projects as needed -->
          </div>
        </div>

        <!-- Contact & Social -->
        <div class="rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-gray-200 backdrop-blur-sm">
          <div class="mb-4 flex items-center gap-2">
            <div class="rounded-lg bg-indigo-100 p-2">
              <Icon name="ph:user-circle-bold" class="size-6 text-indigo-600" />
            </div>
            <h2 class="text-xl font-bold text-gray-800">
              Let's Connect
            </h2>
          </div>
          <div class="space-y-3">
            <a href="https://github.com/yourusername" target="_blank" class="flex items-center gap-2 rounded-lg p-2 transition-all duration-300 hover:translate-x-1 hover:bg-gray-50">
              <Icon name="ph:github-logo-bold" class="size-5 text-gray-700" />
              <span class="text-gray-600">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" class="flex items-center gap-2 rounded-lg p-2 transition-all duration-300 hover:translate-x-1 hover:bg-gray-50">
              <Icon name="ph:linkedin-logo-bold" class="size-5 text-gray-700" />
              <span class="text-gray-600">LinkedIn</span>
            </a>
            <a href="mailto:your.email@example.com" class="flex items-center gap-2 rounded-lg p-2 transition-all duration-300 hover:translate-x-1 hover:bg-gray-50">
              <Icon name="ph:envelope-bold" class="size-5 text-gray-700" />
              <span class="text-gray-600">Email Me</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Footer -->
    </div>
  </div>
</template>
