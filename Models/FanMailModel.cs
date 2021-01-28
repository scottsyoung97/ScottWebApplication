using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ScottWebApplication.Models
{
    public class FanMailModel
    {
        //getters and setters for all users information as well as limiting the input
        [Range(0, 100)]
        [Required]
        public int assignments { get; set; }

        [Range(0, 100)]
        [Required]
        public int groupProj { get; set; }

        [Range(0, 100)]
        [Required]
        public int quizzes { get; set; }

        [Range(0, 100)]
        [Required]
        public int exams { get; set; }

        [Range(0, 100)]
        [Required]
        public int intex { get; set; }
    }
}
