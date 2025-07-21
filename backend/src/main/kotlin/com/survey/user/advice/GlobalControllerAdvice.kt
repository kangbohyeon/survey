package com.survey.user.advice

import com.survey.user.constants.ExceptionMessage.Companion.NOT_FOUND
import com.survey.user.constants.ExceptionMessage.Companion.RUNTIME
import jakarta.persistence.EntityNotFoundException
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice

@RestControllerAdvice
class GlobalControllerAdvice {

    @ExceptionHandler(EntityNotFoundException::class)
    fun entityNotFound(): ResponseEntity<String> {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(NOT_FOUND)
    }

    @ExceptionHandler(RuntimeException::class)
    fun runtime(): ResponseEntity<String> {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(RUNTIME)
    }
}