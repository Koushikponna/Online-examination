package com.exam.controller;

import com.exam.model.Exam;
import com.exam.service.ExamService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/exams")
public class ExamController {
    private final ExamService service;

    public ExamController(ExamService service) {
        this.service = service;
    }

    @GetMapping
    public List<Exam> all() { return service.getAll(); }

    @PostMapping
    public Exam create(@RequestBody Exam exam) { return service.save(exam); }
}
