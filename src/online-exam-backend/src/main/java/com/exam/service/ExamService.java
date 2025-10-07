package com.exam.service;

import com.exam.model.Exam;
import com.exam.repository.ExamRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ExamService {
    private final ExamRepository repo;

    public ExamService(ExamRepository repo) {
        this.repo = repo;
    }

    public List<Exam> getAll() { return repo.findAll(); }
    public Exam save(Exam exam) { return repo.save(exam); }
}
