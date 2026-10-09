  // Auto Fill Check-Out Date
  document.querySelectorAll("#bookingsTable tbody tr").forEach(row => {
      const checkInCell = row.cells[2];
      const checkOutCell = row.cells[3];
      const checkInDate = new Date(checkInCell.textContent.trim());
      if (!isNaN(checkInDate)) {
          checkInDate.setMonth(checkInDate.getMonth() + 1);
          checkOutCell.textContent = checkInDate.toISOString().split('T')[0];
      }
  });

  // Search Filter
  document.getElementById('bookingSearch').addEventListener('input', function() {
      const q = this.value.trim().toLowerCase();
      document.querySelectorAll("#bookingsTable tbody tr").forEach(tr => {
          const text = tr.innerText.toLowerCase();
          tr.style.display = text.includes(q) ? '' : 'none';
      });
  });

  // Mark as Paid Button with Restore option (Right-aligned restore)
  document.querySelectorAll(".mark-paid").forEach(btn => {
      btn.addEventListener("click", function() {
          const td = this.parentElement;
          td.innerHTML = `
            <div class="d-flex flex-column align-items-center">
                <span class="badge bg-success mb-2 text-center">Paid</span>
                <button class="btn btn-sm btn-warning restore-payment">Restore</button>
            </div>
        `;
          td.querySelector(".restore-payment").addEventListener("click", function() {
              td.innerHTML = `<button class="btn btn-sm btn-success mark-paid">Mark as Paid</button>`;
              rebindMarkPaid(td.querySelector(".mark-paid"));
          });
      });
  });

  // Rebind Mark as Paid function
  function rebindMarkPaid(btn) {
      btn.addEventListener("click", function() {
          const td = this.parentElement;
          td.innerHTML = `
            <div class="d-flex flex-column align-items-center">
                <span class="badge bg-success mb-2 text-center">Paid</span>
                <button class="btn btn-sm btn-warning restore-payment">Restore</button>
            </div>
        `;
          td.querySelector(".restore-payment").addEventListener("click", function() {
              td.innerHTML = `<button class="btn btn-sm btn-success mark-paid">Mark as Paid</button>`;
              rebindMarkPaid(td.querySelector(".mark-paid"));
          });
      });
  }

  // PDF Download
  document.getElementById("downloadPDF").addEventListener("click", function() {
      // Target the actual table element
      const element = document.querySelector(".table-responsive table");

      html2pdf()
          .from(element)
          .set({
              margin: 0.2, // smaller margin to fit more content
              filename: "bookings-monitor.pdf",
              html2canvas: {
                  scale: 2,
                  useCORS: true,
                  scrollY: 0
              },
              jsPDF: {
                  unit: "in",
                  format: "a4",
                  orientation: "landscape"
              },
              pagebreak: {
                  mode: ['css', 'legacy'],
                  before: '.page-break', // you can add <div class="page-break"></div> in HTML if needed
                  after: '.page-break',
                  avoid: 'tr' // try to avoid breaking inside table rows
              }
          })
          .save();
  });