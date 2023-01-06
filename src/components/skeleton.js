export function showSkeleton() {
  const container = document.getElementById('countriesContainer');
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
  container.innerHTML = '';
  for (let i = 0; i < 8; i++) {
    container.innerHTML += template;
  }
}
