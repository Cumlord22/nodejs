using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ExamEmployee.Models;

namespace ExamEmployee.Data
{
    public class ExamEmployeeContext : DbContext
    {
        public ExamEmployeeContext(DbContextOptions<ExamEmployeeContext> options)
            : base(options)
        {
        }

        public DbSet<ExamEmployee.Models.Employee> Employee { get; set; } = default!;
    }
}