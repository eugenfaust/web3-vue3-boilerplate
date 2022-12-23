<script>
export default {
  data() {
    return {
      options: {
        chart: {
          background: '0',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        theme: {
          mode: 'dark',
          pallete: 'pallete3',
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
      donutSeries: [44, 55, 41, 17, 15],
    };
  },
};
</script>
<template>
  <div class="flex flex-col bg-base-300 rounded-lg">
    <div class="stats shadow bg-base-300 flex flex-col lg:flex-row">
      <div class="stat border-0">
        <div class="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div class="stat-title">Total Likes</div>
        <div class="stat-value text-primary">25.6K</div>
        <div class="stat-desc">21% more than last month</div>
      </div>

      <div class="stat sm:max-lg:border-base-300">
        <div class="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div class="stat-title ">Page Views</div>
        <div class="stat-value text-secondary">2.6M</div>
        <div class="stat-desc">21% more than last month</div>
      </div>

      <div class="stat sm:max-lg:border-base-300">
        <div class="stat-figure text-secondary">
          <div class="avatar online">
            <div class="w-16 rounded-full">
              <img src="https://placeimg.com/128/128/people" />
            </div>
          </div>
        </div>
        <div class="stat-value">86%</div>
        <div class="stat-title">Tasks done</div>
        <div class="stat-desc text-secondary">31 tasks remaining</div>
      </div>
    </div>
    <div class="stats bg-primary text-primary-content">
      <div class="stat">
        <div class="stat-title">Account balance</div>
        <div class="stat-value">$89,400</div>
        <div class="stat-actions">
          <button class="btn btn-sm btn-success">Add funds</button>
        </div>
      </div>

      <div class="stat">
        <div class="stat-title">Current balance</div>
        <div class="stat-value">$89,400</div>
        <div class="stat-actions">
          <button class="btn btn-sm">Withdrawal</button>
          <button class="btn btn-sm">deposit</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
