export function showMainSkeleton() {
  const container = document.getElementById('countriesContainer');
  container.innerHTML = '';
  const template = `
    <div class="bg-white rounded drop-shadow-lg animate-pulse dark:bg-darkBlue">
      <div class="w-full h-48 bg-lightGray rounded-t"></div>
      <div class="pt-5 pb-10 px-6">
        <div class="mb-4 h-5 bg-lightGray rounded"></div>
        <div class="mb-2 h-3 bg-lightGray rounded"></div>
        <div class="mb-2 h-3 bg-lightGray rounded"></div>
        <div class="mb-2 h-3 bg-lightGray rounded"></div>
      </div>
    </div>
  `;
  for (let i = 0; i < 8; i++) {
    container.innerHTML += template;
  }
}

export function showSinglePageSkeleton() {
  const container = document.getElementById('countryContainer');
  container.innerHTML = '';
  const template = `
    <div class="mt-14 grid grid-cols-1 animate-pulse md:grid-cols-2 md:gap-x-28">
      <div class="w-full h-60 mb-10 bg-lightGray drop-shadow-lg md:h-96 md:mb-0"></div>
      <div class="self-center">
        <div class="h-8 mb-5 bg-lightGray rounded md:mb-7"></div>
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 md:mb-14">
          <div class="mb-10 lg:mb-0">
            <div class="w-full h-4 mb-4 bg-lightGray rounded md:mb-4"></div>
            <div class="w-full h-4 mb-4 bg-lightGray rounded md:mb-4"></div>
            <div class="w-full h-4 mb-4 bg-lightGray rounded md:mb-4"></div>
            <div class="w-full h-4 mb-4 bg-lightGray rounded md:mb-4"></div>
            <div class="w-full h-4 mb-4 bg-lightGray rounded md:mb-4"></div>
          </div>
          <div class="mb-10 md:mb-0">
            <div class="w-full h-4 mb-4 bg-lightGray rounded md:mb-4"></div>
            <div class="w-full h-4 mb-4 bg-lightGray rounded md:mb-4"></div>
            <div class="w-full h-4 mb-4 bg-lightGray rounded md:mb-4"></div>
          </div>
        </div>
        <div class="xl:flex xl:space-x-4 xl:items-center">
          <div class="mb-4 w-48 h-4 bg-lightGray rounded xl:mb-0"></div>
          <div class="flex items-center flex-wrap gap-4">
            <div class="w-24 h-10 bg-lightGray rounded"></div>
            <div class="w-24 h-10 bg-lightGray rounded"></div>
            <div class="w-24 h-10 bg-lightGray rounded"></div>
          </div>
        </div>
      </div>
    </div>
  `;
  container.innerHTML = template;
}
